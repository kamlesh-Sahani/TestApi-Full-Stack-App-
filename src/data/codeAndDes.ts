import { dataCodes } from "./dataCode";
interface ApiType {
  code: string;
  des: string;
  api: string;
}
export interface CodeAndDesType {
  title: string;
  apis: ApiType[];
}
export const codeAndDes: CodeAndDesType[] = [
  {
    title: "weather",
    apis: [
      {
        api: "http://localhost:3000/api/weather/all",

        code:dataCodes.weatherCode,
        des: `Retrieve comprehensive weather data for all available locations. This API provides detailed information including temperature, wind speed, humidity, atmospheric pressure, weather conditions, sunrise and sunset times, UV index, and visibility. Perfect for applications that need a complete overview of weather across multiple regions.`,
      },
      {
        api: "http://localhost:3000/api/weather/one?city=new delhi",
        code:dataCodes.weatherCode,
        des: `Get specific weather data for a particular city. This endpoint delivers detailed weather information such as temperature, wind speed, humidity, atmospheric pressure, weather conditions, sunrise and sunset times, UV index, and visibility for the specified city. Ideal for apps focused on urban weather forecasting.`,
      },
      {
        api: "http://localhost:3000/api/weather/one?state=delhi",
        code:dataCodes.weatherCode,
        des: `Access weather details for a specific state. This API provides crucial weather metrics including temperature, wind speed, humidity, atmospheric pressure, weather conditions, sunrise and sunset times, UV index, and visibility tailored to the chosen state. Useful for state-wide weather monitoring and reporting.`,
      },

      {
        api: "http://localhost:3000/api/weather/one?country=india",
        code:dataCodes.weatherCode,
        des: `Fetch weather information for an entire country. This endpoint offers comprehensive weather data including temperature, wind speed, humidity, atmospheric pressure, weather conditions, sunrise and sunset times, UV index, and visibility for a specified country. Essential for applications that need country-wide weather data analysis.`,
      },
    ],
  },
  {
    title: "product",
    apis: [
      {
        api: "http://localhost:3000/api/product/all",
        code: `{
          "_id": "667a9cf8c0badc51c4d68ad8",
          "title": "Wireless Bluetooth Headphones",
           "description": "High-quality wireless Bluetooth headphones with noise-cancellation and long battery life.",
           "price": 99.99,
           "reviews": [
                        {
                          "review": "Great sound quality and very comfortable to wear.",
                          "_id": "667a9cf8c0badc51c4d68ad9"
                        },
                        {
                         "review": "Battery lasts long, but the noise cancellation could be better.",
                         "_id": "667a9cf8c0badc51c4d68ada"
                        }
                      ],
            "category": "Electronics",
            "stock": 50,
            "reviewStar": 4.5,
            "image": "https://example.com/images/wireless-bluetooth-headphones.jpg",
            "createdAt": "2024-06-25T10:33:28.710Z",
            "updatedAt": "2024-06-25T10:33:28.710Z",
            "__v": 0
      }
        `,
        des: `Retrieve a comprehensive list of all available products in the catalog. This API provides detailed information on each product, including title, description, price, reviews, category, stock availability, review ratings, and images. Ideal for applications that require a full overview of the product inventory.`,
      },
      {
        api: "http://localhost:3000/api/product/one?id={productId}",
        code: `{
      "_id": "667a9cf8c0badc51c4d68ad8",
      "title": "Wireless Bluetooth Headphones",
       "description": "High-quality wireless Bluetooth headphones with noise-cancellation and long battery life.",
       "price": 99.99,
       "reviews": [
                    {
                      "review": "Great sound quality and very comfortable to wear.",
                      "_id": "667a9cf8c0badc51c4d68ad9"
                    },
                    {
                     "review": "Battery lasts long, but the noise cancellation could be better.",
                     "_id": "667a9cf8c0badc51c4d68ada"
                    }
                  ],
        "category": "Electronics",
        "stock": 50,
        "reviewStar": 4.5,
        "image": "https://example.com/images/wireless-bluetooth-headphones.jpg",
        "createdAt": "2024-06-25T10:33:28.710Z",
        "updatedAt": "2024-06-25T10:33:28.710Z",
        "__v": 0
  }
    `,
        des: `Get detailed information about a specific product by its ID. This endpoint delivers comprehensive details such as the product's title, description, price, reviews, category, stock availability, review ratings, and images. Useful for applications focused on individual product pages or detailed product information.`,
      },
    ],
  },
  {
    title: "randomusers",
    apis: [
      {
        api: "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10",
        code: dataCodes.randomUserCode,
        des: "The API endpoint retrieves a random list of users. When accessing this endpoint, you will receive a response containing a randomly generated list of users.This functionality is useful for scenarios such as testing, demo data generation, or populating user interfaces with dummy data.It provides a convenient way to obtain randomized user information for various purposes within your application.",
      },
      {
        api: "https://api.freeapi.app/api/v1/public/randomusers/{userId}",
        code: dataCodes.randomUserCode,
        des: "The API endpoint retrieves a user based on the specified ID.When accessing this endpoint and providing a valid user ID as a parameter, you will receive a response containing the details of the user matching the provided ID.",
      },
      {
        api: "https://api.freeapi.app/api/v1/public/randomusers/user/random",
        code: dataCodes.randomUserCode,
        des: "The API endpoint retrieves a single random user. When accessing this endpoint, you will receive a response containing the details of one randomly selected user.",
      },
    ],
  },
  {
    title: "randomproducts",
    apis: [
      {
        api: "https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid&query=mens-watches",
        code: `
         {
              "category": "mens-watches",
              "price": 120,
              "thumbnail": "https://cdn.dummyjson.com/product-images/61/thumbnail.jpg",
              "images": [
              "https://cdn.dummyjson.com/product-images/61/1.jpg",
              "https://cdn.dummyjson.com/product-images/61/2.png",
              "https://cdn.dummyjson.com/product-images/61/3.jpg"
              ],
              "title": "Leather Straps Wristwatch",
              "id": 61
              },
              {
              "category": "mens-watches",
              "price": 46,
              "thumbnail": "https://cdn.dummyjson.com/product-images/62/thumbnail.jpg",
              "images": [
              "https://cdn.dummyjson.com/product-images/62/1.jpg",
              "https://cdn.dummyjson.com/product-images/62/2.jpg"
              ],
              "title": "Waterproof Leather Brand Watch",
              "id": 62
              },
              {
              "category": "mens-watches",
              "price": 50,
              "thumbnail": "https://cdn.dummyjson.com/product-images/63/thumbnail.webp",
              "images": [
              "https://cdn.dummyjson.com/product-images/63/1.jpg",
              "https://cdn.dummyjson.com/product-images/63/2.jpg",
              "https://cdn.dummyjson.com/product-images/63/3.png",
              "https://cdn.dummyjson.com/product-images/63/4.jpeg"
              ],
              "title": "Royal Blue Premium Watch",
              "id": 63
        }`,
        des: "The API endpoint returns a list of dummy products.When accessing this endpoint, you will receive a response containing a collection of dummy product information.",
      },
      {
        api: "https://api.freeapi.app/api/v1/public/randomproducts/{product_id}",
        des: "The API endpoint allows you to retrieve a product based on the specified product ID.When accessing this endpoint and providing a valid product ID as a parameter, you will receive a response containing the details of the product matching the provided ID.",
        code:dataCodes.randomProductCode,
      },
      {
        api: "https://api.freeapi.app/api/v1/public/randomproducts/product/random",
        des: "The API endpoint allows you to retrieve a randomly generated dummy product.when accessing this endpoint, you will receive a response containing the details of a randomly generated product.",
        code:dataCodes.randomProductCode,
      },
    ],
  },

  {
    title:"randomjokes",
    apis:[
      {
        api:"https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%2Cid%2Ccontent&page=1",
        des:"The API endpoint retrieves a list of jokes.When accessing this endpoint, you will receive a response containing a collection of jokes.This functionality is useful for retrieving multiple jokes at once, enabling you to incorporate humor and amusement into your application or provide entertainment to users.",
        code:dataCodes.randomeJokesCode,
      },
      {
        des:"The API endpoint allows you to retrieve a joke based on the specified joke ID.When accessing this endpoint and providing a valid joke ID as a parameter, you will receive a response containing the joke associated with the provided ID.",
        api:"https://api.freeapi.app/api/v1/public/randomjokes/{joke_id}",
        code:dataCodes.randomeJokesCode
      },
      {
        api:"https://api.freeapi.app/api/v1/public/randomjokes/joke/random",
        des:"The API endpoint returns a random joke from a list of jokes.When accessing this endpoint, you will receive a response containing a randomly selected joke",
        code:dataCodes.randomeJokesCode
      },
      
    ]
  },{
    title:"books",
    apis:[
      {
        api:"https://api.freeapi.app/api/v1/public/books?page=1&limit=10&inc=kind%2Cid%2Cetag%2CvolumeInfo&query=tech",
        des:"The API endpoint allows you to retrieve a list of random books.Upon accessing this endpoint, you will receive a response containing a collection of randomly selected books.",
        code:dataCodes.booksCode
      },{
        api:"https://api.freeapi.app/api/v1/public/books/{books_id}",
        des:"The API endpoint retrieves a book based on the book ID provided as a path variable.By accessing this endpoint and specifying a valid book ID, you will receive a response containing the details of the corresponding book.",
        code:dataCodes.booksCode
      },
      {
        api:"https://api.freeapi.app/api/v1/public/books/book/random",
        des:"The API endpoint returns a single random book from a list of books.Upon accessing this endpoint, you will receive a response containing the details of a randomly selected book",
        code:dataCodes.booksCode
      },
  
    ]
  },{
    title:"stock",
    apis:[
      {
        api:"https://api.freeapi.app/api/v1/public/stocks?page=1&limit=2&inc=Symbol%2CName%2CMarketCap%2CCurrentPrice&query=tata",
        code:dataCodes.stockCode,
        des:"The API endpoint allows you to retrieve a list of stocks listed on NSE [National Stock Exchange of India]. The data you get is a snapshot taken on 28th Dec 2023 & not live from stock exchange. Upon accessing this endpoint, you will receive a response containing a collection of randomly selected stocks"
      },
      {
        api:"https://api.freeapi.app/api/v1/public/stocks/INFY",
        code:`
  {
    "Name": "Tata Chemicals Limited",
    "Symbol": "TATACHEM",
    "ListingDate": "01-Apr-99",
    "ISIN": "INE092A01019",
    "MarketCap": "₹ 28,355 Cr.",
    "CurrentPrice": "₹ 1,113",
    "HighLow": "₹ 1,123 / 912",
    "StockPE": 14.4,
    "BookValue": "₹ 840",
    "DividendYield": "1.54 %",
    "ROCE": "11.6 %",
    "ROE": "12.0 %",
    "FaceValue": "₹ 10.0"
  },`,
        des:"The API endpoint retrieves a stock based on the Symbol as ID provided as a path variable.By accessing this endpoint and specifying a valid stock symbol, you will receive a response containing the details of the corresponding stock."
      },
      {
        api:"https://api.freeapi.app/api/v1/public/stocks/stock/random",
        code:`
  {
    "Name": "Tata Chemicals Limited",
    "Symbol": "TATACHEM",
    "ListingDate": "01-Apr-99",
    "ISIN": "INE092A01019",
    "MarketCap": "₹ 28,355 Cr.",
    "CurrentPrice": "₹ 1,113",
    "HighLow": "₹ 1,123 / 912",
    "StockPE": 14.4,
    "BookValue": "₹ 840",
    "DividendYield": "1.54 %",
    "ROCE": "11.6 %",
    "ROE": "12.0 %",
    "FaceValue": "₹ 10.0"
  },`,
        des:"The API endpoint returns a single random stock from a list of stocks.upon accessing this endpoint, you will receive a response containing the details of a randomly selected stock."
      },
    ]
  },
  {
    title:"quotes",
    apis:[
      {
        api:"https://api.freeapi.app/api/v1/public/quotes?page=1&limit=10&query=human",
        des:"The API endpoint allows you to retrieve a list of quotes.When accessing this endpoint, you will receive a response containing a collection of quotes.",
        code:dataCodes.quotesCode
      },
      {
        api:"https://api.freeapi.app/api/v1/public/quotes/{quotes_id}",
        des:"The API endpoint enables you to retrieve a specific quote based on the quote ID provided in the path variable.When accessing this endpoint and providing a valid quote ID, you will receive a response containing the quote corresponding to that ID.",
        code:dataCodes.quotesCode
      },
      {
        api:"https://api.freeapi.app/api/v1/public/quotes/quote/random",
        des:"The API endpoint returns a random quote from a list of quotes.When accessing this endpoint, you will receive a response containing a randomly selected quote.",
        code:dataCodes.quotesCode
      },
    ]
  },{
    title:"youtube",
    apis:[
      {
        api:"https://api.freeapi.app/api/v1/public/youtube/channel",
        des:"This Channel Details API is your gateway to access comprehensive information about a specific YouTube channel.By leveraging a static JSON file, you can effortlessly retrieve and explore vital details, statistics, and metadata associated with the channel to build stunning YouTube like channel page UI.--->Disclaimer:Data provided by the API is static and not real-timeThis simplifies the process of developing a YouTube clone, allowing developers to solely focus on UI design and creativity, without worrying about complex API key configuration.",
        code:dataCodes.youtubeChannelCode
      },
      {
        api:"https://api.freeapi.app/api/v1/public/youtube/videos?page=1&limit=10&query=javascript&sortBy=keep%20one%3A%20mostLiked%20%7C%20mostViewed%20%7C%20latest%20%7C%20oldest",
        des:"This API endpoint enables you to retrieve all YouTube videos from a JSON file with a structure similar to YouTube's public API.Upon accessing this endpoint, you will receive a response containing a list of YouTube videos, just like you would from YouTube's official API.--->Disclaimer:Data provided by the API is static and not real-time.This simplifies the process of developing a YouTube clone, allowing developers to solely focus on UI design and creativity, without worrying about complex API key configuration.",
        code:dataCodes.youtubeVideoCode
      },

    ]
  },
  {
    title:"ecommerce",
    apis:[
      {
        api:"https://api.freeapi.app/api/v1/ecommerce/profile",
        code:dataCodes.ecommerceProfileCode,
        des:"The API endpoint allows you to retrieve the e-commerce profile of the logged-in user.When accessing this endpoint, you will receive a response containing the basic details of the user's e-commerce profile.This includes information such as the user's name, email address, phone number, and other relevant details."
      },
      {
        api:"https://api.freeapi.app/api/v1/ecommerce/products?page=1&limit=10",
        code:dataCodes.ecommerceProduct,
        des:"The API returns all the products available in an e-commerce application.When invoked, this API fetches and retrieves the complete list of products offered by the e-commerce platform.The response typically includes details such as the product name, description, price, stock, and other relevant information.This API allows users or other systems to access and display the entire catalog of products, facilitating browsing and purchasing decisions within the e-commerce application."
      },
      {
        api:"https://api.freeapi.app/api/v1/ecommerce/products/{product_id}",
        code:dataCodes.ecommerceProduct,
        des:"The API retrieves a product based on the provided productId passed as a path variable.This API serves as a means to fetch specific product information from the backend based on a unique identifier.By passing the productId in the URL, the API searches and retrieves the corresponding product details, including attributes such as name, price, description, stock, images and any other relevant information associated with the product."
      },
    ]
  }
];
