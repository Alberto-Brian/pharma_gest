/*
  Warnings:

  - You are about to drop the column `id_pharma_gest` on the `pharmacy` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `pharmacy` DROP FOREIGN KEY `Pharmacy_id_pharma_gest_fkey`;

-- AlterTable
ALTER TABLE `pharmacy` DROP COLUMN `id_pharma_gest`;
