/*
  Warnings:

  - Added the required column `banking_account` to the `Pharmacy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `doc` to the `Pharmacy` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pharmacy` ADD COLUMN `banking_account` VARCHAR(191) NOT NULL,
    ADD COLUMN `deleted_at` DATETIME(3) NULL,
    ADD COLUMN `deleted_by` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `doc` VARCHAR(191) NOT NULL;
