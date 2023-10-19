/*
  Warnings:

  - You are about to alter the column `codigo` on the `cartoes` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(3)`.

*/
-- AlterTable
ALTER TABLE "cartoes" ALTER COLUMN "codigo" SET DATA TYPE VARCHAR(3);
