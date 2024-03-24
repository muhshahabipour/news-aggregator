import CategorySection from "./CategorySection";

const categories = [
  {
    key: "Cat1",
    title: "Cat1",
    articles: [
      {
        id: "4c5d0310-19e9-4fae-bc0d-617249b42d68",
        banner: "http://placehold.it/32x32",
        publishAt: "2016-02-10T07:58:20 -02:00",
        title: "anim pariatur duis aliqua irure est",
        summary:
          "Officia excepteur adipisicing ut excepteur cupidatat deserunt cupidatat qui. Tempor occaecat aute culpa ullamco minim fugiat aliqua dolor sit aliquip aute occaecat Lorem. Exercitation laboris nostrud nostrud ipsum ullamco eiusmod esse anim. Nisi minim incididunt eu do nisi commodo aliqua enim. Aliqua elit ex esse laboris Lorem sunt eiusmod voluptate quis.\r\n",
        author: "Randolph Bradford",
        category: "Cat1",
      },
      {
        id: "d15ab748-46d7-497d-bf32-0292a57028a4",
        banner: "http://placehold.it/32x32",
        publishAt: "2023-08-14T08:51:00 -03:00",
        title: "ex nostrud cupidatat culpa qui irure",
        summary:
          "Ex ex aliquip dolore Lorem ullamco minim officia culpa nulla. Est deserunt sunt reprehenderit occaecat ex ea ad dolor fugiat tempor laboris. Amet non in culpa deserunt occaecat. Anim proident veniam enim consectetur laboris eu quis ullamco. Do Lorem labore cupidatat reprehenderit officia qui.\r\n",
        author: "Marcella Sanford",
        category: "Cat1",
      },
      {
        id: "39663510-594d-485c-b5b1-1885da08eddb",
        banner: "http://placehold.it/32x32",
        publishAt: "2023-11-12T10:38:07 -02:00",
        title: "ea mollit nostrud id ad aliqua",
        summary:
          "Ad nostrud sit proident culpa proident. Ipsum ad adipisicing incididunt excepteur do excepteur. Ad deserunt nostrud exercitation enim consectetur in ullamco duis et irure. Laboris fugiat eiusmod dolore adipisicing nisi veniam excepteur velit nostrud esse ea. Anim eu tempor enim amet consectetur Lorem proident. Et aute eiusmod quis aliqua nulla veniam exercitation aliqua ipsum aliqua sit.\r\n",
        author: "Megan Mueller",
        category: "Cat1",
      },
      {
        id: "49e716ab-12f7-4a6d-82c4-862569c9ba80",
        banner: "http://placehold.it/32x32",
        publishAt: "2023-06-14T09:35:11 -03:00",
        title: "dolor ex do ut incididunt eu",
        summary:
          "Deserunt nulla reprehenderit anim cupidatat do duis est officia tempor irure excepteur qui. Dolore dolor ipsum ullamco consectetur aliquip do enim sunt reprehenderit irure deserunt est laboris. Sunt ullamco reprehenderit do aliquip amet sunt velit veniam et cupidatat tempor nostrud Lorem laborum.\r\n",
        author: "Valentine Morales",
        category: "Cat1",
      },
    ],
  },
  {
    key: "Cat2",
    title: "Cat2",
    articles: [
      {
        id: "a00494b8-7933-4121-b606-b9ccc69dcb6f",
        banner: "http://placehold.it/32x32",
        publishAt: "2019-11-27T06:00:31 -02:00",
        title: "in enim deserunt velit mollit eu",
        summary:
          "Commodo aliqua dolor excepteur irure velit nostrud pariatur duis. Cupidatat nulla est tempor in culpa ullamco proident dolor tempor veniam voluptate dolor. Exercitation qui cupidatat aliquip velit cillum veniam irure ad Lorem magna incididunt. Quis duis qui eu occaecat non irure deserunt sunt esse esse voluptate qui nostrud officia. Dolor ut duis consequat sint cillum anim dolor nisi. Deserunt irure sit eiusmod Lorem cupidatat magna est.\r\n",
        author: "Grimes Osborne",
        category: "Cat2",
      },
    ],
  },
  {
    key: "Cat3",
    title: "Cat3",
    articles: [
      {
        id: "4c5d0310-19e9-4fae-bc0d-617249b42d63",
        banner: "http://placehold.it/32x32",
        publishAt: "2016-02-10T07:58:20 -02:00",
        title: "anim pariatur duis aliqua irure est",
        summary:
          "Officia excepteur adipisicing ut excepteur cupidatat deserunt cupidatat qui. Tempor occaecat aute culpa ullamco minim fugiat aliqua dolor sit aliquip aute occaecat Lorem. Exercitation laboris nostrud nostrud ipsum ullamco eiusmod esse anim. Nisi minim incididunt eu do nisi commodo aliqua enim. Aliqua elit ex esse laboris Lorem sunt eiusmod voluptate quis.\r\n",
        author: "Randolph Bradford",
        category: "Cat3",
      },
      {
        id: "d15ab748-46d7-497d-bf32-0292a57028a3",
        banner: "http://placehold.it/32x32",
        publishAt: "2023-08-14T08:51:00 -03:00",
        title: "ex nostrud cupidatat culpa qui irure",
        summary:
          "Ex ex aliquip dolore Lorem ullamco minim officia culpa nulla. Est deserunt sunt reprehenderit occaecat ex ea ad dolor fugiat tempor laboris. Amet non in culpa deserunt occaecat. Anim proident veniam enim consectetur laboris eu quis ullamco. Do Lorem labore cupidatat reprehenderit officia qui.\r\n",
        author: "Marcella Sanford",
        category: "Cat3",
      },
    ],
  },
];

const TopCategories = () => {
  return (
    <div className="flex flex-wrap flex-col gap-y-8 xl:flex-row">
      {[...(categories || [])].map((category) => (
        <div className="xl:basis-1/2 flex-shrink-0 xl:even:px-2 xl:odd:pr-2" key={category.key}>
          <CategorySection category={category} />
        </div>
      ))}
    </div>
  );
};

export default TopCategories;
