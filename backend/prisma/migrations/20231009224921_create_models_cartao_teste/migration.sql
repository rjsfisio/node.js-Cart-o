-- CreateTable
CREATE TABLE "cartoes" (
    "numero" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_usuario" TEXT NOT NULL,

    CONSTRAINT "cartoes_pkey" PRIMARY KEY ("numero")
);

-- AddForeignKey
ALTER TABLE "cartoes" ADD CONSTRAINT "cartoes_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
