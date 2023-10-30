
interface ICard {
  label: string,
  value: string,
  icon: string
}



export default function Card({ label, value, icon }: ICard) {
  return (
    <div className="flex  flex-col items-center w-full h-44 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-gray-500 text-center rounded-sm border-[1px] border-solid border-gray-900 m-2 p-4">
    <p className="text-6xl mb-4">{icon}</p>
    <p className="text-3xl font-semibold">{value}</p>
    <p className="text-gray-900 text-sm">{label}</p>
  </div>
  );
}
