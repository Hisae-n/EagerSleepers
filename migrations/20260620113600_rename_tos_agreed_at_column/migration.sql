-- Rename the initially misspelled TOS agreement timestamp column.
ALTER TABLE "User" RENAME COLUMN "tosAgreedA" TO "tosAgreedAt";
