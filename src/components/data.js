export const menu = [
    {
      lk: "",
      name: "О компании",
      children: [
        { lk: "/about", name: "О Консорциуме «Кодекс»", target: "_self" },
        { lk: "/about/events", name: "Мероприятия", target: "_self" },
        {
          lk: "/news/feed/novosti-kompanii",
          name: "Новости компании",
          target: "_self",
        },
        { lk: "/about/history", name: "История компании", target: "_self" },
        {
          lk: "/volunteering",
          name: "Корпоративное волонтерство",
          target: "_self",
        },
        {
          lk: "",
          name: " Партнерство и сотрудничество",
          children: [
            {
              lk: "/cooperation",
              name: "Сотрудничество с нами",
              target: "_self",
            },
            {
              lk: "/cooperation/partners",
              name: "Наши партнеры",
              target: "_self",
            },
            {
              lk: "/cooperation/experts",
              name: "Наши эксперты",
              target: "_self",
            },
          ],
        },
        { lk: "/about/vacancies", name: "Карьера в Кодекс", target: "_self" },
        { lk: "/about/contacts", name: "Контакты", target: "_self" },
      ],
    },
    { lk: "/products", name: "Продукты и услуги", target: "_self" },
    {
      lk: "",
      name: "Онлайн-сервисы",
      children: [
        {
          lk: "https://docs.cntd.ru/",
          target: "_blank",
          name: "Электронный фонд нормативно-технической и нормативно-правовой информации",
        },
        {
          lk: "http://sudrf.kodeks.ru/rospravo",
          target: "_blank",
          name: "Архив решений арбитражных судов и судов общей юрисдикции",
        },
        {
          lk: "https://suntd.ru/",
          target: "_blank",
          name: "Система управления нормативной и технической документацией «Техэксперт»",
        },
      ],
    },
    { lk: "/news", name: "Новости" },
  ]
  