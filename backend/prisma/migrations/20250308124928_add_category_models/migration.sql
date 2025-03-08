/*
  Warnings:

  - You are about to drop the column `description` on the `Category` table. All the data in the column will be lost.
  - The primary key for the `Subcategory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category_id` on the `Subcategory` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Subcategory` table. All the data in the column will be lost.
  - You are about to drop the column `subcat_id` on the `Subcategory` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Subcategory` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Subcategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `Subcategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Subcategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "description",
ADD COLUMN     "image" TEXT,
ALTER COLUMN "createdBy" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Subcategory" DROP CONSTRAINT "Subcategory_pkey",
DROP COLUMN "category_id",
DROP COLUMN "created_at",
DROP COLUMN "subcat_id",
DROP COLUMN "title",
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdBy" TEXT NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD CONSTRAINT "Subcategory_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Subcategory" ADD CONSTRAINT "Subcategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
