-- CreateTable
CREATE TABLE "Foro" (
    "id" SERIAL NOT NULL,
    "subject" TEXT,
    "description" TEXT NOT NULL,
    "date_publication" TIMESTAMP(3),
    "date_update" TIMESTAMP(3),
    "comunityId" INTEGER NOT NULL,

    CONSTRAINT "Foro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Answer" (
    "id" SERIAL NOT NULL,
    "message" TEXT,
    "foroId" INTEGER NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Response" (
    "id" SERIAL NOT NULL,
    "message" TEXT,
    "foroId" INTEGER NOT NULL,

    CONSTRAINT "Response_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Answer_foroId_key" ON "Answer"("foroId");

-- CreateIndex
CREATE UNIQUE INDEX "Response_foroId_key" ON "Response"("foroId");

-- AddForeignKey
ALTER TABLE "Foro" ADD CONSTRAINT "Foro_comunityId_fkey" FOREIGN KEY ("comunityId") REFERENCES "Comunity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_foroId_fkey" FOREIGN KEY ("foroId") REFERENCES "Foro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_foroId_fkey" FOREIGN KEY ("foroId") REFERENCES "Foro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
