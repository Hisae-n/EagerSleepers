import { HttpError } from 'wasp/server'
import type { OnAfterSignupHook, OnBeforeSignupHook } from 'wasp/server/auth'

export const onBeforeSignup: OnBeforeSignupHook = async ({ req }) => {
  const { tosAgreed } = req.body as { tosAgreed?: unknown }

  if (tosAgreed !== true) {
    throw new HttpError(400, '利用規約への同意が必要です。')
  }
}

export const onAfterSignup: OnAfterSignupHook = async ({ user, prisma }) => {
  await prisma.user.update({
    where: { id: user.id },
    data: { tosAgreedAt: new Date() },
  })
}
