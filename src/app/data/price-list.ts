import { CoffeeType } from "../models/coffee-type.enum";
import { CupSize } from "../models/cup-size.enum";
import { Topping } from "../models/topping.enum";

export const priceList = new Map<string, number>([
  [CupSize.SMALL, 2 ],
  [CupSize.MEDIUM, 3 ],
  [CupSize.LARGE, 3.5 ],
  [CoffeeType.COLUMBIAN, 5 ],
  [CoffeeType.PERUVIAN, 6.5 ],
  [CoffeeType.BRAZILIAN, 6 ],
  [Topping.CHANTILLY, 4 ],
  [Topping.CHOCOLATE_CHIPS, 1 ],
  [Topping.CARAMEL_SYRUP, 2 ],
  [Topping.VANILLA_SYRUP, 2 ],
])

