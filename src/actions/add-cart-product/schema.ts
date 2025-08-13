import { z } from "zod";

//Faz a validação dos dados do carrinho antes de inserir no banco de dados
export const addProductToCartSchema = z.object({
  productVariantId: z.uuid(),
  quantity: z.number().min(1),
});

export type AddProductToCartSchema = z.infer<typeof addProductToCartSchema>;
