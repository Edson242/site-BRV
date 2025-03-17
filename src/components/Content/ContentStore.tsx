import { useForm } from "react-hook-form";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import Card from "../Card/Card";

export default function ContentStore() {
  const formSchema = z.object({
    product: z.string().min(2, "Mínimo 2 caracteres").max(50, "Máximo 50 caracteres"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      product: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="bg-zinc-900 flex flex-1 flex-col gap-4 pl-14 pr-14 pt-6 pb-6 text-white">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <div className="flex flex-row justify-center items-center gap-1 hover:text-white">
                <span className="material-symbols-outlined">home</span>
                <p>Home</p>
              </div>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-white">
              <div className="flex flex-row justify-center items-center gap-1">
                <span className="material-symbols-outlined">shopping_cart</span>
                <p className="font-normal text-zinc-100">Loja</p>
              </div>
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Conteúdo */}
      <div className="pt-4">
        <h1 className="text-3xl font-bold">Bem-vindo(a) à loja!</h1>
        <p className="text-zinc-300">Veja todos os produtos disponíveis.</p>
      </div>
      <div className="pb-10">
        Aqui, você encontra opções que melhoram sua experiência e garantem que você aproveite ao máximo cada momento no jogo. Seja VIP para obter benefícios exclusivos, personalize seu personagem com skins únicas, ou mergulhe em novas aventuras com nossas novidades. Confira abaixo as opções disponíveis e torne seu jogo ainda mais emocionante!
      </div>

      {/* Formulário */}
      <div className="flex flex-row justify-between items-top gap-4">
        <div className="rounded-md p-6 bg-zinc-900 border border-zinc-700 max-w-[310px] w-full">
          <h2 className="text-lg font-semibold mb-4">Filtros:</h2>

          {/* AQUI ESTÁ A CORREÇÃO */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="product"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Produto</FormLabel>
                    <FormControl>
                      <Input placeholder="Pesquise pelo nome do produto." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="product"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Categoria</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Selecione uma categoria" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="vips">VIPs</SelectItem>
                        <SelectItem value="corps">Corporações</SelectItem>
                        <SelectItem value="orgs">Organizações</SelectItem>
                        <SelectItem value="facs">Facções</SelectItem>
                        <SelectItem value="level">Level</SelectItem>
                        <SelectItem value="dinheiro">Dinheiro</SelectItem>
                        <SelectItem value="ids">IDs</SelectItem>
                        <SelectItem value="skins">Skins</SelectItem>
                        <SelectItem value="exclusivos">Exclusivos</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="product"
                render={({ field }) => (
                  <FormItem className="hover:cursor-pointer">
                    <FormLabel>Ordenar por</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Selecione uma categoria" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="menorPreco">Menor preço</SelectItem>
                        <SelectItem value="maiorPreco">Maior preço</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-center items-center pt-4 pb-2">
                <button type="submit" className="bg-transparent w-full h-9 rounded text-white hover:bg-[#ffffff12] border-1 hover:cursor-pointer">
                  Aplicar Filtros
                </button>
              </div>
            </form>
          </Form>
        </div>
        <div className="rounded-md p-6 bg-zinc-900 border border-zinc-700 w-full">
          <div className="flex justify-baseline items-center gap-4 ">
            <Card Help={"Ajuda"} ID={100} Title={"vip colaborador"} Valor={150} Img={"src/assets/B_V.png"} />
            <Card Help={"Ajuda"} ID={100} Title={"vip colaborador"} Valor={150} Img={"src/assets/B_V.png"} />
            <Card Help={"Ajuda"} ID={100} Title={"vip colaborador"} Valor={150} Img={"src/assets/B_V.png"} />
            <Card Help={"Ajuda"} ID={100} Title={"vip colaborador"} Valor={150} Img={"src/assets/B_V.png"} />
          </div>
        </div>
      </div>
    </div>
  );
}
