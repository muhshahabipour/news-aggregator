import TrendingFirst from "./TrendingFirst";
import TrendingItem from "./TrendingItem";

const data = [
  {
    id: "d8f079e8-7c82-4b64-b1ba-69a8e08123a8",
    banner: "http://placehold.it/64x32",
    publishAt: "2015-10-21T11:34:26 -03:00",
    title: "quis velit nostrud irure laborum aliqua",
    summary:
      "Duis anim nostrud eiusmod proident et. Ex in nostrud magna excepteur eiusmod magna aliquip consequat laboris excepteur. Cupidatat velit fugiat tempor incididunt amet elit exercitation non. Non enim minim enim amet tempor amet cillum magna velit cillum aute aliqua mollit veniam. Ut nisi elit excepteur cupidatat nostrud.\r\n",
    author: "Trujillo Oneill",
    category: "Sport",
  },
  {
    id: "26a33596-adb4-4f11-96df-8a1dc681b70b",
    banner: "http://placehold.it/32x32",
    publishAt: "2014-08-10T04:55:31 -03:00",
    title: "adipisicing magna nisi nostrud in nulla",
    summary:
      "Adipisicing velit do amet velit magna incididunt eu ullamco aute sunt et. Ullamco id ipsum deserunt eiusmod incididunt anim nulla culpa. Nostrud labore esse commodo nisi incididunt id anim et minim labore voluptate veniam. Magna in laborum occaecat pariatur nulla amet mollit nostrud fugiat aliquip non. Quis culpa incididunt voluptate incididunt quis dolore eiusmod labore dolore ad. Occaecat reprehenderit aute enim exercitation.\r\n",
    author: "Jana Hansen",
    category: "Sport",
  },
  {
    id: "eee66b6f-24ee-4a1d-87a0-87eeddb74160",
    banner: "http://placehold.it/32x32",
    publishAt: "2014-11-20T12:46:47 -02:00",
    title: "mollit et quis quis duis exercitation",
    summary:
      "Nostrud sit amet ut velit incididunt ut ullamco ullamco consequat cupidatat officia quis. Irure amet Lorem id pariatur exercitation exercitation magna. Dolor deserunt duis amet ea amet reprehenderit ex tempor quis Lorem commodo. Ullamco enim ullamco dolore esse officia commodo cillum dolore magna incididunt duis aliquip voluptate. Ex velit Lorem ullamco velit commodo laboris sit est consequat incididunt adipisicing in irure. Quis ipsum enim mollit adipisicing Lorem reprehenderit proident enim esse laboris culpa tempor commodo. Laboris irure duis ut consequat nisi aliqua veniam cupidatat.\r\n",
    author: "Janelle Diaz",
    category: "Sport",
  },
  {
    id: "a3ad2c5d-8e1b-44b1-b08d-bea9028d4ab4",
    banner: "http://placehold.it/32x32",
    publishAt: "2015-07-13T04:06:28 -03:00",
    title: "ad dolore eiusmod ea voluptate aliqua",
    summary:
      "Enim laborum in pariatur eu amet sunt commodo commodo aute nostrud laboris. Lorem nostrud minim excepteur sint cupidatat Lorem laborum laboris nostrud voluptate eu incididunt. Sint anim esse ea officia reprehenderit quis tempor reprehenderit magna pariatur nostrud duis. In do amet commodo pariatur sint occaecat. Magna sint esse aliquip dolor commodo exercitation.\r\n",
    author: "Jewel Mcdaniel",
    category: "Sport",
  },
  {
    id: "229bcce7-f1eb-494d-a818-e98d7a8589d9",
    banner: "http://placehold.it/32x32",
    publishAt: "2017-10-29T05:29:27 -02:00",
    title: "id dolor enim sint consectetur qui",
    summary:
      "Exercitation incididunt elit est excepteur veniam dolor minim velit reprehenderit reprehenderit fugiat aliqua. Velit minim cillum irure id excepteur ut ex. Dolore do aute ex veniam id voluptate anim cupidatat.\r\n",
    author: "Herminia Weiss",
    category: "Sport",
  },
  {
    id: "3e66cc95-f7b9-4263-bb27-4b83f08d1baf",
    banner: "http://placehold.it/32x32",
    publishAt: "2023-05-18T06:00:14 -03:00",
    title: "labore ex officia id incididunt minim",
    summary:
      "Elit labore sint consectetur et dolore ullamco consequat consectetur ullamco aliquip. Culpa id commodo cillum ullamco officia nisi adipisicing ad Lorem commodo excepteur amet exercitation do. Occaecat Lorem anim velit in voluptate enim in deserunt ut. Non pariatur sit est tempor quis amet eiusmod esse fugiat commodo anim quis. Proident enim fugiat aliqua fugiat esse eu id mollit non est veniam do. Fugiat laborum eiusmod mollit eu minim adipisicing velit nisi ut in nostrud.\r\n",
    author: "Carole Baxter",
    category: "Sport",
  },
  {
    id: "f62292b0-594b-4e67-83a3-6cccb35d20b5",
    banner: "http://placehold.it/32x32",
    publishAt: "2021-01-21T08:29:05 -02:00",
    title: "aliquip excepteur minim adipisicing culpa voluptate",
    summary:
      "Commodo ad anim dolore laborum sit laborum sunt fugiat enim. Esse minim reprehenderit cupidatat veniam eu minim ullamco sint in anim labore quis esse incididunt. Sint eiusmod minim labore irure anim.\r\n",
    author: "Maynard Gill",
    category: "Sport",
  },
];

const Trending = () => {
  return (
    <div>
      <h1 className="font-bold">Trending</h1>
      <div className="flex flex-col gap-y-4 xl:flex-row mt-6">
        <div className="flex flex-col xl:basis-1/2 xl:pr-2">
          <TrendingFirst article={data[0]} />
        </div>
        <div className="flex flex-col gap-y-4 xl:basis-1/2 xl:px-2">
          {data.slice(1, 6).map((article) => (
            <TrendingItem key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
