export interface Car {
  id: number
  name: string
  brand: string
  color: string
  colorClass: string
  available: boolean
  price: string
  year: number
}

export const cars: Car[] = [
  {
    id: 1,
    name: "Mazda Mazda5",
    brand: "Mazda",
    color: "Red",
    colorClass: "red",
    available: true,
    price: "$22,000",
    year: 2021,
  },
  {
    id: 2,
    name: "Ford F250",
    brand: "Ford",
    color: "Teal",
    colorClass: "teal",
    available: true,
    price: "$45,000",
    year: 2022,
  },
  {
    id: 3,
    name: "Mercedes-Benz G-Class",
    brand: "Mercedes-Benz",
    color: "Violet",
    colorClass: "violet",
    available: false,
    price: "$130,000",
    year: 2023,
  },
  {
    id: 4,
    name: "Ford Explorer",
    brand: "Ford",
    color: "Blue",
    colorClass: "blue",
    available: true,
    price: "$38,500",
    year: 2022,
  },
  {
    id: 5,
    name: "Honda Civic",
    brand: "Honda",
    color: "Aquamarine",
    colorClass: "cyan",
    available: false,
    price: "$25,000",
    year: 2021,
  },
  {
    id: 6,
    name: "Kia Optima",
    brand: "Kia",
    color: "Violet",
    colorClass: "fuchsia",
    available: true,
    price: "$24,000",
    year: 2020,
  },
]
