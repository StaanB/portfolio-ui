import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { Pin } from "lucide-react";

const ContactMe = () => {
  const formSchema = z.object({
    email: z.string().email().min(1, "Esse campo é obrigatório!"),
    name: z.string().min(3, "Seu nome deve conter pelo menos 3 caracteres!"),
    message: z.string().min(5, "O campo de mensagem é obrigatório!").max(100),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="w-11/12 m-auto h-[80vh] xl:h-[100vh] flex flex-col xl:flex-row items-center justify-center">
      <div className="w-full xl:w-1/2 m-auto text-center">
        <h3 className="w-3/4 xl:w-2/6 m-auto xl:mb-8 text-2xl xl:text-3xl font-bold uppercase p-3 border-b-white border-b-2">
          Fale comigo!
        </h3>
        <ul className="w-full mt-5 flex flex-col items-center justify-center gap-5 xl:gap-10 font-bold">
          <div className="w-5/6 xl:w-72 flex items-center justify-stretch xl:justify-start gap-5 text-lg">
            <Mail className="text-stone-600" />
            <li>stanleybrenner@gmail.com</li>
          </div>

          <div className="w-5/6 xl:w-72 flex items-center justify-stretch xl:justify-start gap-5">
            <Phone className="text-stone-600" />
            <li>(71) 9 8689-5914</li>
          </div>

          <div className="w-5/6 xl:w-72 flex items-center justify-stretch xl:justify-start gap-5">
            <Pin className="text-stone-600" />
            <li>Salvador - Bahia</li>
          </div>
        </ul>
      </div>

      <Form {...form}>
        <form onSubmit={() => onSubmit} className="w-full xl:w-1/2 space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    className="w-full xl:w-1/2 bg-white text-stone-900"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Nome"
                    {...field}
                    className="w-full xl:w-1/2 bg-white text-stone-900"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    {...field}
                    className="w-full xl:w-1/2 bg-white text-stone-900 resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactMe;
