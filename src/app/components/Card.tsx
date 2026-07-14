import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export default function Card({ title, description, buttonText, href }: CardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 w-full max-w-sm border border-red-50 hover:border-red-200">
      <h2 className="text-2xl font-bold text-red-600 mb-3">{title}</h2>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <Link
        href={href}
        className="inline-block bg-red-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-red-700 active:scale-95 transition-all duration-200"
      >
        {buttonText}
      </Link>
    </div>
  );
}