import React, { useState } from "react";
import { Upload, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

const Form: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div
      className="bg-white rounded-lg shadow-lg p-8 w-[660px] space-y-6"
      style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "12px" }}
    >
      {/* Title */}
      <h2 className="text-[#1C1C1C] text-xl font-medium mb-4">Создание клуба</h2>

      {/* Top Section: Upload Logo and Inputs */}
      <div className="flex space-x-8">
        {/* Upload Logo */}
        <div className="w-[208px]">
          <label htmlFor="logo-upload" className="block text-[#5F6B88] text-sm font-medium mb-2">
            Логотип клуба
          </label>
          <div
            className="border-dashed border-2 border-[#0068FF] rounded-lg h-[114px] flex flex-col items-center justify-center cursor-pointer hover:bg-muted/50"
          >
            <input
              type="file"
              id="logo-upload"
              accept="image/jpeg,image/png,image/svg+xml"
              className="hidden"
            />
            <label htmlFor="logo-upload" className="cursor-pointer flex flex-col items-center">
              <Upload className="w-8 h-8 text-[#0068FF]" />
              <p className="text-sm text-[#0068FF]">Загрузить логотип</p>
            </label>
          </div>
          <p className="text-xs text-[#5F6B88] mt-1">JPG, PNG, SVG</p>
          <p className="text-xs text-[#5F6B88] mt-1">Не более 600x600px, 5MB</p>
        </div>

        {/* Club Details */}
        <div className="flex-1 space-y-4">
          <div>
            <label htmlFor="name" className="block text-[#5F6B88] text-sm font-medium mb-1">
              Название клуба
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-[#F0F3FA] rounded-lg p-3 text-sm text-[#5F6B88] placeholder-[#B0B3B8]"
              placeholder="Введите название клуба"
            />
          </div>
          <div className="flex items-center space-x-3">
            <input type="checkbox" id="main-club" className="w-4 h-4 border border-[#D1D5DB] rounded" />
            <label htmlFor="main-club" className="text-[#5F6B88] text-sm font-medium">
              Главный клуб
            </label>
          </div>
          <div>
            <label htmlFor="admin" className="block text-[#5F6B88] text-sm font-medium mb-1">
              Администратор клуба
            </label>
            <select
              id="admin"
              className="w-full bg-[#F0F3FA] rounded-lg p-3 text-sm text-[#AFB7CA] placeholder-[#B0B3B8]"
            >
              <option>Выберите главного администратора</option>
            </select>
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-[#5F6B88] text-sm font-medium mb-2">
          Краткое описание
        </label>
        <textarea
          id="description"
          rows={3}
          className="w-full bg-[#F0F3FA] rounded-lg p-3 text-sm text-[#5F6B88] placeholder-[#B0B3B8]"
          style={{ height: "119px" }}
          placeholder="Текст описания"
        ></textarea>
        <p className="text-right text-xs text-[#5F6B88] mt-1">0/300</p>
      </div>

      {/* Category and Visibility */}
      <div className="flex items-center space-x-8">
        <div className="flex-1">
          <label htmlFor="category" className="block text-[#5F6B88] text-sm font-medium mb-1">
            Категория
          </label>
          <input
            type="text"
            id="category"
            className="w-full bg-[#F0F3FA] rounded-lg p-3 text-sm text-[#5F6B88] placeholder-[#B0B3B8]"
            placeholder="Введите категорию"
          />
        </div>

        {/* Visibility Section */}
        <div className="flex-1">
          <label className="block text-[#5F6B88] text-sm font-medium mb-2">Видимость</label>
          <div className="relative w-full max-w-[294px] h-[48px] bg-blue-50 rounded-lg p-2">
  <motion.div
    className="absolute w-[calc(50%-8px)] h-[calc(100%-16px)] bg-blue-600 rounded-lg"
    initial={false}
    animate={{
      x: isVisible ? "0%" : "100%",
    }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 30,
    }}
  />
  <div className="relative flex h-full">
    <button
      onClick={() => setIsVisible(true)}
      className={`flex items-center justify-center gap-2 flex-1 rounded-lg font-medium ${
        isVisible ? "text-white" : "text-blue-600"
      }`}
    >
      <Eye className="w-5 h-5" />
      <span className="text-sm">Видимый</span>
    </button>
    <button
      onClick={() => setIsVisible(false)}
      className={`flex items-center justify-center gap-2 flex-1 rounded-lg font-medium ${
        !isVisible ? "text-white" : "text-blue-600"
      }`}
    >
      <EyeOff className="w-5 h-5" />
      <span className="text-sm">Заблокирован</span>
    </button>
  </div>
</div>

        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-between space-x-4">
        <button className="flex-1 px-4 py-3 bg-[#5F6B88] text-white rounded-lg text-sm font-medium hover:bg-[#4B5563] flex items-center justify-center">
          ← Вернуться
        </button>
        <button className="flex-1 px-4 py-3 bg-[#3BBC30] text-[#FFFFFF] rounded-lg text-sm font-medium hover:bg-[#2C9E25] flex items-center justify-center">
          ✔ Создать клуб
        </button>
      </div>
    </div>
  );
};

export default Form;
