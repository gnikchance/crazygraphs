import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  LabelList
} from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "maroon",
  "black",
  "red",
  "pink",
  "green",
  "blue",
  "darkgrey",
];
let data = [
  {
    name: "Burj Khalifa",
    height: 2717,
    city: "Dubai",
  },
  {
    name: "Merdeka 118",
    height: 2227,
    city: "Kuala Lumpur",
  },
  {
    name: "Shanghai Tower",
    height: 2073,
    city: "Shanghai",
  },
  {
    name: "Makkah Royal Clock Tower",
    height: 1972,
    city: "Mecca",
  },
  {
    name: "Ping An Finance Center",
    height: 1965,
    city: "Shenzhen",
  },
  {
    name: "Lotte World Tower",
    height: 1819,
    city: "Seoul",
  },
  {
    name: "One World Trade Center",
    height: 1776,
    city: "New York City",
  },
];

const getPath = (x, y, width, height) =>
  `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
    x + width / 2
  }, ${y}
     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
     Z`;

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function TallestBuildings() {
  return (
    <>
      <div className="flex flex-col p-12">
        <p className="font-semibold text-3xl mb-10 flex flex-row justify-between">
          Tallest Buildings in the World
          <br />
          <button 
            className="text-sm bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-2 rounded"
            onClick={() => window.open('https://www.skyscrapercenter.com/buildings', '_blank')}
          >
            View Data Source
          </button>
        </p>
        {/* Start Chart */}
        {/* <ResponsiveContainer width='100%' height='100%'> */}
        <BarChart
          width={1000}
          height={500}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis
            dataKey="height"
            label={{
              value: "Height in feet",
              angle: -90,
              position: "insideLeft",
              style: { fontWeight: "bold", margin: "10px 10px 10px 10px" },
            }}
          />
          <Tooltip formatter={(value, name) => [`${value} feet`, "Height"]} />
          <Bar
            shape={<TriangleBar />}
            dataKey="height"
            fill="#8884d8"
          >
                <LabelList dataKey="height" position="top" formatter={(value) => `${value} feet`} />
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
        {/* </ResponsiveContainer> */}
        {/* Start Description*/}
        <p className="text-xl font-bold mb-4 mt-10">Description</p>
        <p className="text-lg mb-4">
          The buildings featured in this chart are marvels of modern engineering
          and architecture. They represent a diverse range of styles and are
          located in cities around the world. For instance, the Burj Khalifa in
          Dubai, currently the tallest building globally, stands at an
          awe-inspiring height of over 2,700 feet. It's not just a skyscraper,
          but a symbol of Dubai's growth and development.
        </p>
        <p className="text-lg mb-4">
          Did you know that the construction of these super-tall buildings often
          leads to "height competitions" among cities? For example, the race
          between the Chrysler Building and 40 Wall Street for the title of the
          tallest building in the world in the late 1920s is a famous historical
          example. The Chrysler Building won by secretly assembling a 125-foot
          spire inside the building and then hoisting it into place, taking the
          total height to 1,046 feet!
        </p>
        <p className="text-lg mb-4">
          These buildings are not just about height, though. They are
          multi-functional complexes that often include offices, hotels,
          observation decks, and even residential spaces. They are a testament
          to human ingenuity and the endless pursuit of reaching new heights.
          In part, they are a celebration of architectural and societal achievements that
          continue to push the boundaries of what's possible.
        </p>
      </div>
    </>
  );
}
