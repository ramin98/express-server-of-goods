const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const HOST = 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

let goods = [
  {
    product_name: "Kişi köynəyi",
    product_description: "Mavi rəngdə, 100% pamuk",
    product_price: 50,
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Qadın bluzası",
    product_description: "Dəri detallı, qara rəngdə",
    product_price: 60,
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Kişi pantolonu",
    product_description: "Qəhvəyi rəng, kənar cebi",
    product_price: 75,
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Qadın eteyi",
    product_description: "Qırmızı rəng, mini",
    product_price: 40,
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Kişi dəsmalı",
    product_description: "Nəqşdar dizayn",
    product_price: 20,
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Qadın çantası",
    product_description: "Əlgötürən, dəri",
    product_price: 90,
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Kişi botları",
    product_description: "Qış üçün, suya davamlı",
    product_price: 120,
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Qadın ayaqqabıları",
    product_description: "Yüksək tapan, lacivərt",
    product_price: 85,
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Kişi papağı",
    product_description: "Qara rəngdə, dəri",
    product_price: 45,
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Qadın şalvarı",
    product_description: "Göy rəngdə, kaşmir",
    product_price: 70,
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Kişi palto",
    product_description: "Süət dəri, qara rəngdə",
    product_price: 250,
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Qadın jaketi",
    product_description: "Uzun, qaşqır",
    product_price: 200,
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Kişi kəməri",
    product_description: "Dəri, metal tokalı",
    product_price: 40,
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Qadın badlonu",
    product_description: "Retro stil, qızıl rəngdə",
    product_price: 180,
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Kişi şortu",
    product_description: "Spor stil, elastik",
    product_price: 60,
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Qadın maykası",
    product_description: "Boyalı nəqş, pamuklu",
    product_price: 45,
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Kişi saatı",
    product_description: "Qara rəngdə, analog",
    product_price: 150,
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Qadın bəzək",
    product_description: "Qızıl, komplekt",
    product_price: 220,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Kişi atkısı",
    product_description: "Xəzəl rəng, uzun",
    product_price: 35,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Qadın bantı",
    product_description: "Metal detallı, elastik",
    product_price: 50,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Kişi kostyumu",
    product_description: "İki parçalı, qara rəngdə",
    product_price: 320,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Qadın kombinezonu",
    product_description: "Yaz üçün, açıq rəng",
    product_price: 150,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Kişi sviteri",
    product_description: "Düz rəng, yüngül",
    product_price: 70,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Qadın ziyafət geyimi",
    product_description: "Düzənşən, yaz üçün",
    product_price: 95,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Kişi sport formaları",
    product_description: "Spandex, idman üçün",
    product_price: 55,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Qadın bikini",
    product_description: "Tropik nəqş, elastik",
    product_price: 45,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Kişi çantası",
    product_description: "Dizayner, əsas bölməsi",
    product_price: 100,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Qadın ətri",
    product_description: "Gül ətri, uzunömürlü",
    product_price: 80,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Kişi şalı",
    product_description: "Səliqəli, çoxrəngli",
    product_price: 25,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Qadın sutyeni",
    product_description: "Destəklənmiş, rahat",
    product_price: 65,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
];

let i = 1;
const assignIds = () => {
  goods = goods.map((item) => ({ ...item, id: i++ }));
};
assignIds();

app.get("/goods", async (req, res) => {
  try {
    res.json(goods);
  } catch (error) {
    res.status(500).json({ text: 'Ошибка получения товаров' });
  }
});

app.get("/my-bag", async (req, res) => {
  try {
    res.json(myBag);
  } catch (error) {
    res.status(500).json({ text: 'Ошибка получения корзины' });
  }
});

app.get("/selected-element", async (req, res) => {
  try {
    res.json(selectedElement);
  } catch (error) {
    res.status(500).json({ text: 'Ошибка получения выбранного элемента' });
  }
});

app.get("/orders", async (req, res) => {
  try {
    res.json(orders);
  } catch (error) {
    res.status(500).json({ text: 'Ошибка получения заказов' });
  }
});

app.post("/add-mybag", async (req, res) => {
  try {
    let obj = req.body;
    if (myBag.some((item) => item.product_name === obj.product_name)) {
      res.json({ text: 'Этот товар уже в корзине', case: false });
    } else {
      myBag.push(obj);
      res.json({ text: `Товар ${obj.product_name} был добавлен в корзину`, case: true });
    }
  } catch (error) {
    res.status(500).json({ text: 'Ошибка добавления товара в корзину' });
  }
});

app.post("/add-selected-element", async (req, res) => {
  try {
    let obj = req.body;
    selectedElement = { ...obj };
    res.send(`Товар с названием ${obj.product_name} был выбран`);
  } catch (error) {
    res.status(500).json({ text: 'Ошибка выбора товара' });
  }
});

app.post("/add-orders", async (req, res) => {
  try {
    let obj = req.body;
    orders.push(obj);
    res.json({ text: `Заказ клиента ${obj.customerName} был добавлен` });
    myBag = [];
  } catch (error) {
    res.status(500).json({ text: 'Ошибка добавления заказа' });
  }
});

app.delete("/delete-mybag/:id", async (req, res) => {
  try {
    let id = parseInt(req.params.id);
    let item = myBag.find((item) => id === item.id);
    if (item) {
      myBag = myBag.filter((item) => id !== item.id);
      res.json({ text: `Товар ${item.product_name} был удален из корзины` });
    } else {
      res.status(404).json({ text: 'Товар не найден в корзине' });
    }
  } catch (error) {
    res.status(500).json({ text: 'Ошибка удаления товара из корзины' });
  }
});

app.delete("/clean-mybag", async (req, res) => {
  try {
    myBag = [];
    res.json({ text: 'Корзина очищена' });
  } catch (error) {
    res.status(500).json({ text: 'Ошибка очистки корзины' });
  }
});

app.delete("/delete-admin/:id", async (req, res) => {
  try {
    let id = parseInt(req.params.id);
    let item = goods.find((item) => id === item.id);
    if (item) {
      goods = goods.filter((item) => id !== item.id);
      res.json({ text: `Товар ${item.product_name} был удален из товаров` });
    } else {
      res.status(404).json({ text: 'Товар не найден' });
    }
  } catch (error) {
    res.status(500).json({ text: 'Ошибка удаления товара' });
  }
});

app.post("/add-admin", async (req, res) => {
  try {
    let obj = req.body;
    if (goods.some((item) => item.product_name === obj.product_name)) {
      res.json({ text: 'Этот товар уже есть в массиве', case: false });
    } else {
      let id = goods.at(-1).id + 1;
      obj.id = id;
      goods.push(obj);
      res.json({ text: `Товар с именем ${obj.product_name} был добавлен`, id });
    }
  } catch (error) {
    res.status(500).json({ text: 'Ошибка добавления товара' });
  }
});

app.put("/change-admin/:id", async (req, res) => {
  try {
    let id = parseInt(req.params.id);
    let index = goods.findIndex((item) => id === item.id);
    if (index !== -1) {
      goods[index] = { ...req.body, id: goods[index].id };
      res.json({ text: `Товар ${req.body.product_name} был изменен` });
    } else {
      res.status(404).json({ text: 'Товар не найден' });
    }
  } catch (error) {
    res.status(500).json({ text: 'Ошибка изменения товара' });
  }
});

app.get("/search-goods/:searchValue", async (req, res) => {
  try {
    let searchValue = req.params.searchValue;
    let filteredArray = goods.filter((item) =>
      item.product_name.startsWith(searchValue)
    );
    res.json(filteredArray);
  } catch (error) {
    res.status(500).json({ text: 'Ошибка поиска товаров' });
  }
});

app.get("/search-admin/:searchValue", async (req, res) => {
  try {
    let searchValue = req.params.searchValue;
    let filteredArray = goods.filter((item) =>
      item.product_name.includes(searchValue)
    );
    res.json(filteredArray);
  } catch (error) {
    res.status(500).json({ text: 'Ошибка поиска товаров' });
  }
});

app.get("/search-price/:minPrice/:maxPrice", async (req, res) => {
  try {
    let minPrice = parseInt(req.params.minPrice);
    let maxPrice = parseInt(req.params.maxPrice);
    let filteredArray = goods.filter(
      (item) => item.product_price >= minPrice && item.product_price <= maxPrice
    );
    res.json(filteredArray);
  } catch (error) {
    res.status(500).json({ text: 'Ошибка поиска товаров по цене' });
  }
});

app.listen(HOST, () => {
  console.log(HOST + " OK");
});
