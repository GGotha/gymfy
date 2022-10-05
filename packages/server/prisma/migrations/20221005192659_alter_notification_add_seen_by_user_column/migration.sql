/*
  Warnings:

  - You are about to drop the column `brl_amount` on the `notifications` table. All the data in the column will be lost.
  - Added the required column `seen_by_user` to the `notifications` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `notifications` DROP COLUMN `brl_amount`,
    ADD COLUMN `seen_by_user` BOOLEAN NOT NULL;
