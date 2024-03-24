import ArticleBrief from "../Home/components/ArticleBrief";

const category = {
  key: "Cat1",
  title: "Cat1",
};

const articles = [
  {
    id: "28280806-0e30-465a-83de-fd30b4564dbd",
    banner: "http://placehold.it/32x32",
    publishAt: "2014-06-01T11:41:42 -03:00",
    title: "quis irure eu ullamco laborum et",
    summary:
      "Duis ad mollit sint ipsum dolore adipisicing esse veniam. Sit sunt ipsum deserunt eiusmod excepteur duis id incididunt sit cupidatat incididunt minim proident ut. Do voluptate ut labore dolore culpa anim ad anim adipisicing eu cupidatat ad consectetur do.\r\n",
    author: "Kelly Peck",
    category: "Cat1",
  },
  {
    id: "eaad7786-0871-4973-bde3-921cf0f7f2b7",
    banner: "http://placehold.it/32x32",
    publishAt: "2020-10-03T10:10:04 -03:00",
    title: "sit proident commodo enim elit velit",
    summary:
      "Irure proident irure nisi adipisicing incididunt voluptate labore cillum esse sint duis. Laborum quis veniam ipsum do irure consectetur. Et consectetur commodo commodo ullamco quis. Aute est nostrud elit ipsum enim labore aliqua aliqua excepteur veniam do do amet et. Quis deserunt occaecat fugiat commodo nisi occaecat anim ea et officia in.\r\n",
    author: "Carmella Young",
    category: "Cat1",
  },
  {
    id: "ef61934b-d47c-4715-9dbc-7690ce977c11",
    banner: "http://placehold.it/32x32",
    publishAt: "2018-02-22T04:27:17 -02:00",
    title: "ex quis et deserunt cillum est",
    summary:
      "Fugiat aliquip Lorem ut pariatur laborum fugiat Lorem reprehenderit consequat duis. Nulla dolore ea aliquip esse ea cillum. Minim non ad incididunt anim excepteur duis sint consectetur esse enim. Ut quis exercitation pariatur deserunt et quis consequat nulla ex occaecat ex. Lorem aute id minim ipsum ex do labore est proident nostrud.\r\n",
    author: "Joan Simon",
    category: "Cat1",
  },
  {
    id: "eb602c96-bf69-4994-b9b0-bdab630c42a4",
    banner: "http://placehold.it/32x32",
    publishAt: "2019-06-16T10:40:04 -03:00",
    title: "incididunt laborum est fugiat Lorem incididunt",
    summary:
      "Incididunt tempor sit amet qui adipisicing laboris magna ex duis culpa ad amet enim ipsum. Ad qui id nostrud excepteur dolore cillum eu magna elit ex aute ullamco laborum culpa. Enim officia duis consequat duis do et magna minim elit qui labore amet est ea.\r\n",
    author: "Amalia Hodge",
    category: "Cat1",
  },
  {
    id: "6b91673c-b99e-432f-90da-581710ea91b4",
    banner: "http://placehold.it/32x32",
    publishAt: "2018-11-02T10:12:29 -02:00",
    title: "reprehenderit esse eu mollit voluptate dolor",
    summary:
      "In ea Lorem cillum nostrud labore aliqua veniam minim. Eu est incididunt do eiusmod. Id fugiat mollit veniam ad quis. Sit commodo nostrud qui ea sunt aliquip ullamco adipisicing commodo deserunt laborum veniam veniam. Ad sunt aliqua anim sit qui ullamco qui elit eu non ea velit duis occaecat.\r\n",
    author: "Rosalind Peters",
    category: "Cat1",
  },
  {
    id: "3290349c-5517-4ae6-94a2-be25b268103e",
    banner: "http://placehold.it/32x32",
    publishAt: "2015-06-08T12:47:44 -03:00",
    title: "amet occaecat velit magna amet ipsum",
    summary:
      "Deserunt velit dolore excepteur et consectetur ea Lorem. Nostrud do ut non ea irure cillum voluptate cillum laborum. Nostrud exercitation anim laboris eiusmod velit ea officia exercitation pariatur.\r\n",
    author: "Maricela Henson",
    category: "Cat1",
  },
  {
    id: "c20a00b0-71d6-4fcf-b806-5dc4c342627f",
    banner: "http://placehold.it/32x32",
    publishAt: "2018-07-31T08:42:38 -03:00",
    title: "culpa id aliquip laborum elit laboris",
    summary:
      "Aliquip aliqua culpa exercitation laborum Lorem eiusmod occaecat quis qui non ipsum ipsum fugiat officia. Sunt veniam irure minim Lorem deserunt elit eiusmod excepteur. Deserunt proident reprehenderit eiusmod deserunt aliqua.\r\n",
    author: "Karyn Estrada",
    category: "Cat1",
  },
  {
    id: "dba19eb9-ded0-4bca-bf83-b7523bb3c05d",
    banner: "http://placehold.it/32x32",
    publishAt: "2017-04-04T05:09:46 -03:00",
    title: "minim commodo id officia aute excepteur",
    summary:
      "Mollit reprehenderit Lorem ipsum veniam sint. Labore sunt proident veniam labore veniam est mollit voluptate dolor consectetur excepteur voluptate commodo labore. Fugiat ad amet culpa sunt laboris ex esse reprehenderit. Cillum magna aliquip sunt magna est incididunt cillum laborum.\r\n",
    author: "Gonzalez Marks",
    category: "Cat1",
  },
  {
    id: "1ccb8f11-6f8d-41b5-a5ef-5c543c4f2645",
    banner: "http://placehold.it/32x32",
    publishAt: "2020-12-15T04:17:08 -02:00",
    title: "ex culpa labore nulla nisi consectetur",
    summary:
      "Occaecat aute adipisicing veniam pariatur eiusmod proident exercitation nulla nulla excepteur. Id enim magna cillum minim irure sint aliquip exercitation eu sunt ea. Do cillum deserunt irure ullamco aliquip ut proident adipisicing. Labore incididunt Lorem anim duis. Nulla elit esse duis fugiat ipsum veniam proident laboris aute pariatur et sint.\r\n",
    author: "Callie Sanchez",
    category: "Cat1",
  },
  {
    id: "280f9fdf-22f3-48d2-8373-b44d539b8233",
    banner: "http://placehold.it/32x32",
    publishAt: "2021-08-19T01:26:45 -03:00",
    title: "Lorem in nulla voluptate fugiat eiusmod",
    summary:
      "Est quis veniam sunt do dolore ex do laborum incididunt deserunt consectetur. Irure exercitation ex pariatur nisi nulla Lorem mollit in sit qui ex adipisicing aliquip nostrud. Sunt duis occaecat est amet ullamco aliquip culpa.\r\n",
    author: "Aileen Marshall",
    category: "Cat1",
  },
  {
    id: "0a1bbeba-5bbd-4ba0-99f7-552c0b796288",
    banner: "http://placehold.it/32x32",
    publishAt: "2021-08-04T05:19:31 -03:00",
    title: "eu excepteur occaecat velit sint laboris",
    summary:
      "Sint minim officia laborum deserunt nisi enim quis occaecat labore aliqua. Sunt veniam officia minim nisi anim minim cillum elit mollit mollit laborum Lorem tempor amet. Veniam et amet occaecat nostrud mollit duis deserunt irure sint nulla. Ex est nulla amet esse in. Sunt proident culpa aute culpa pariatur duis dolore Lorem sint in qui. Sit in laborum excepteur fugiat culpa aliquip ut sint aliqua minim dolor voluptate irure reprehenderit. Ipsum irure aliquip ex sit aliquip Lorem consequat et anim amet nisi ad.\r\n",
    author: "Alfreda Cohen",
    category: "Cat1",
  },
  {
    id: "16927512-1724-45dc-aae9-e406ef073fbd",
    banner: "http://placehold.it/32x32",
    publishAt: "2014-05-09T06:21:34 -03:00",
    title: "fugiat commodo officia fugiat minim cupidatat",
    summary:
      "Anim aliqua occaecat cillum velit ipsum irure Lorem excepteur. Incididunt consectetur exercitation exercitation in enim nulla est. Elit occaecat voluptate in duis excepteur nulla amet dolor fugiat dolore voluptate elit aute. Adipisicing laboris ut amet excepteur aliqua cupidatat fugiat cillum est minim nostrud adipisicing veniam. Quis deserunt veniam tempor minim ea. Irure dolor adipisicing ea officia.\r\n",
    author: "Allie Travis",
    category: "Cat1",
  },
];


const NewsByCategory = () => {
  return (
    <div className="flex flex-col gap-y-4 xl:flex-row">
      <div className="flex flex-col xl:basis-3/5 xl:pr-2 gap-y-4">
        <h1 className="font-bold text-2xl">
          Last from{" "}
          <span className="text-orange-400">{category.title || "unknown"}</span>
        </h1>

        <div className="flex flex-col gap-4">
          {[...(articles || [])].map((article) => (
            <ArticleBrief key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsByCategory;
