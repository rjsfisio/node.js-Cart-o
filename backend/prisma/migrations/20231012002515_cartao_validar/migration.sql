/*
  Warnings:

  - Made the column `criado_em` on table `Usuario` required. This step will fail if there are existing NULL values in that column.
  - Made the column `criado_em` on table `cartoes` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "criado_em" SET NOT NULL;

-- AlterTable
ALTER TABLE "cartoes" ALTER COLUMN "criado_em" SET NOT NULL;
