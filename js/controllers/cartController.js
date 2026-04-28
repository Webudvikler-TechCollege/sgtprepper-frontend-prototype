import { getCartList } from "../models/cartModel.js";
import { isLoggedIn } from "../utils/auth.js";
import { render } from "../utils/dom.js";
import { price2Dkk } from "../utils/formatters.js";
import { createButton } from "../views/components/atoms/index.js";
import { renderCartButton } from "../views/components/molecules/cartButton.js";
import createCartPage from "../views/pages/cartPage.js";

export const cartController = async () => {
  const data = await getCartList()

  const formattedData = data.map(item => {
    const rawPrice = item.product?.price ?? 0
    const quantity = item.quantity ?? 1

    const total = rawPrice * quantity

    return {
      ...item,
      priceFormatted: price2Dkk(rawPrice),
      totalFormatted: price2Dkk(total),
      totalRaw: total,
    }
  })

  // samlet kurv total
  const cartTotal = formattedData.reduce((sum, item) => sum + item.totalRaw, 0)

  const cartHtml = createCartPage({
    items: formattedData,
    cartTotal: price2Dkk(cartTotal)
  })

  render('root', cartHtml, true)
}

export const cartButton = async () => {
  // Hent kurv-data
  const data = await getCartList()
  // Tæl samlet antal varer i kurven
  const numLines = data?.reduce((sum, item) => sum + (item?.quantity || 0), 0) || 0
  // Kald og returner view med antal
  return renderCartButton(numLines)
}

