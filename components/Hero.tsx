import React from "react";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#2C3E50] text-white px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-[#C8B560] mb-8">
        Добро пожаловать на НАШ БУСТ
      </h1>

      <p className="text-lg text-center max-w-2xl mx-auto mb-6">
        Здесь ты можешь выбрать авторитетный AU аккаунт и прокачать свой кредитный файл.
      </p>

      <Image
        src="/A_Russian-language_digital_graphic_design_advertis.png"
        alt="Наша реклама"
        width={1200}
        height={600}
        className="rounded-xl mx-auto mt-6"
      />

      <p className="text-center mt-10 text-sm text-gray-400">
        Все права защищены © 2025
      </p>
    </main>
  );
}
