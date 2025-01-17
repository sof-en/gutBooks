interface Category {
  id: number;
  name: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Классическая литература",
    description:
      "Здесь вы найдете шедевры мировой литературы, которые проверены временем.",
  },
  {
    id: 2,
    name: "Современная проза",
    description: "В этой категории представлены книги, написанные в XXI веке.",
  },
  {
    id: 3,
    name: "Фантастика и фэнтези",
    description: "Для любителей мистических миров и магических приключений.",
  },
  {
    id: 4,
    name: "Научная фантастика",
    description: "Изучите будущее человечества в жанре научной фантастики.",
  },
];
