FROM node:24.14.1-bookworm

WORKDIR /app

ENV NPM_CONFIG_UPDATE_NOTIFIER=false
ENV NPM_CONFIG_FUND=false

RUN npm install -g @wasp.sh/wasp-cli@0.23.0

EXPOSE 3000 3001

CMD ["wasp", "start"]
