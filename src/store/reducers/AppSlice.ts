import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProduct";

export type ArabicaValuesType = '60%' | '70%' |'80%'| '90%'| '100%'
export type BrandsType = 'Lavazza'| 'Barista'| 'Dallmayr' | 'Boggi'
export type RoastingType = 'light'| 'medium'| 'medium-dark'| 'dark'
export type FiltersType =  {
    count: number[],
    price: number[],
    arabica: string[],
    brand: string[],
    roasting: string[],
    onlyPopular: boolean,
    searchValue: string,
}
type SortType = {
    sortByNameA: boolean,
    sortByNameZ: boolean,
    sortByPriceLowest: boolean,
    sortByPriceHighest: boolean
}

export interface AppState {
    products: IProduct[];
    filters: FiltersType;
    sort: SortType;
    filteredProducts: IProduct[];
    basket: IProduct[];
    isReset: boolean;
    isLoading: boolean;
    error: string;
}

const initialState: AppState = {
    products: [
        {
            icon_url: "https://caravan.by/image/cache/catalog/nnnjnj/risunok1-1200x800.jpg", 
            count: 3, 
            description: "A blend of specially selected 100% Arabica beans to make the perfect espresso with a full-bodied, rich, aromatic flavor that's good at any time of day.", 
            id: '1', 
            title: "Espresso Italiano", 
            price: 6.53, arabica: '100%', 
            brand: "Lavazza", 
            roasting: "medium-dark", 
            isPopular: false
        },
        {
            icon_url: "https://caravan.by/image/cache/catalog/products/lavazza/kofe-lavazza-qualita-oro-molotij-zh_b-250-g-1200x800.jpg", 
            count: 2,  
            description: "The most valuable types of Arabica, grown on fertile soils in the mountains up to 2000 meters high, are assembled in an original blend full of personality.", 
            id: '2', 
            title: "Qualita Oro", 
            price: 10.2, 
            arabica: '100%', 
            brand: "Lavazza", 
            roasting: "medium", 
            isPopular: true
        },
        {
            icon_url: "https://caravan.by/image/cache/catalog/lavazza/lavazza_cremaegusto250g-1200x800.png", 
            count: 5,  
            description: "A coffee blend with a soft, enveloping flavor of selected Brazilian Arabica and Robusta from Southeast Asia. A perfect combination of full body and spicy notes. The perfect coffee at any time of day.", 
            id: '3', 
            title: "Crema E Gusto", 
            price: 4.35, 
            arabica: '90%', 
            brand: "Lavazza", 
            roasting: "dark", 
            isPopular: true
        },
        {
            icon_url: "https://caravan.by/image/cache/catalog/dalmaer/prodomo250g-1200x800.png", 
            count: 12,  
            description: "A blend of selected Arabicas from the best highland plantations in the world. The main flavor note of this type of coffee is given by the arabica from the fertile southern provinces of Ethiopia - the birthplace of coffee.", 
            id: '4', 
            title: "Dallmayr Prodomo", 
            price: 11.0, 
            arabica: '100%', 
            brand: "Dallmayr", 
            roasting: "medium", 
            isPopular: true},
        {
            icon_url: "https://caravan.by/image/cache/catalog/dalmaer/dallmayrclassic500-1200x800.png", 
            count: 1,  
            description: "Full aroma preservation roasting gives Dallmayr Classic coffee its strong, flavor-filled flavor. Ideal for preparation in drip coffee makers, French presses and mugs.", 
            id: '5', 
            title: "Dallmayr Classic", 
            price: 9.35, 
            arabica: '70%', 
            brand: "Dallmayr", 
            roasting: "dark", 
            isPopular: false
        },
        {
            icon_url: "https://foodshop.com.ua/images/product/1433/4681/original.jpg", 
            count: 17,  
            description: "The best German craftsmen carefully roast the beans to a dark degree. This roasting makes this coffee perfect for making a real strong espresso, which makes waking up in the morning so pleasant!", 
            id: '6', 
            title: "Espresso Intenso", 
            price: 23.17, 
            arabica: '60%', 
            brand:"Dallmayr", 
            roasting: "dark", 
            isPopular: false
        },
        {
            icon_url: "https://caravan.by/image/cache/catalog/lavazza/qualita_rossa_250g-1200x800.png", 
            count: 17,  
            description: "A blend with a unique aroma, full-bodied flavor with exceptional roundness and chocolate notes, consisting mainly of Brazilian Arabica and African Robusta.", 
            id: '7', 
            title: "Qualita Rossa", 
            price: 4.64, 
            arabica: '70%', 
            brand:"Lavazza", 
            roasting: "medium", 
            isPopular: false
        },
        {
            icon_url: "https://caravan.by/image/cache/catalog/products/barista/kofe-barista-art-picasso-molotij-250-g-zh_b-1200x800.jpg", 
            count: 8,  
            description: "Milk chocolate and light floral acidity; hazelnut notes", 
            id: '8', 
            title: "Barista Art Picasso", 
            price: 4.64, 
            arabica: '100%', 
            brand:"Barista", 
            roasting: "dark", 
            isPopular: false
        },
        {
            icon_url: "https://caravan.by/image/cache/catalog/barista/baristaart250gkart1leftsm-1200x800.png", 
            count: 3,  
            description: "A blend of selected Arabicas from Colombia, Tanzania and Rwanda gives the drink a berry-citrus sourness and a subtle floral aroma. A bright bouquet of flavors.", 
            id: '9', 
            title: "Barista Art Blend №1", 
            price: 5.02, 
            arabica: '100%', 
            brand:"Barista", 
            roasting: "medium", 
            isPopular: false
        },
        {
            icon_url: "https://caravan.by/image/cache/catalog/products/barista/baristaart1kgbeans1vangoghr-1200x800.png", 
            count: 7,  
            description: "A blend of selected Arabica from Central and South America gives the drink a berry-citrus sourness and a subtle floral aroma.", 
            id: '10', 
            title: "Barista Art Van Gogh", 
            price: 16.63, 
            arabica: '100%', 
            brand:"Barista", 
            roasting: "medium", 
            isPopular: false
        },
        {
            icon_url: "https://caravan.by/image/cache/catalog/dalmaer/dallmayrprodomoentcoffeiniert1-1200x800.jpg", 
            count: 11,  
            description: "To create coffee, caffeine is removed from the noble high mountain arabica, after which the beans are subjected to special processing and roasting with full preservation of the aroma by Dallmayr technology.", 
            id: '11', 
            title: "Prodomo Entcoffeiniert", 
            price: 10.68, 
            arabica: '100%', 
            brand:"Dallmayr", 
            roasting: "medium", 
            isPopular: false
        },
        {
            icon_url: "https://caravan.by/image/cache/catalog/dalmaer/4008167504009_ethiopia_hvp500g_rechts_15-10-2021-1200x800.png", 
            count: 2,  
            description: "A tart flavor and full-bodied aroma. This unique, hand-picked coffee of the highest quality impresses with the aroma of wild herbs, harmoniously complemented by the smell of lemongrass and a hint of dark chocolate.", 
            id: '12', 
            title: "Dallmayr Ethiopia", 
            price: 11.77, 
            arabica: '100%', 
            brand:"Dallmayr", 
            roasting: "light", 
            isPopular: false
        },
        {
            icon_url: "https://caravan.by/image/cache/catalog/barista/baristaart250gkart3leftsm-1200x800.png", 
            count: 5,  
            description: "High-mountain Arabica varieties from Ethiopia that fill the cup with subtle berry notes. A soft balanced flavor with a delicate aroma of dried fruit and red wine.", 
            id: '13', 
            title: "Barista Art Blend №3", 
            price: 5.02, 
            arabica: '100%', 
            brand:"Barista", 
            roasting: "medium", 
            isPopular: false},
        {
            icon_url: "https://caravan.by/image/cache/catalog/barista/mio_elite_225grsm-1200x800.png", 
            count: 5,  
            description: "Balanced, multifaceted flavor, a slight bitterness with berry notes of arabica.", 
            id: '14', 
            title: "Barista MIO Elit", 
            price: 3.09, 
            arabica: '100%', 
            brand:"Barista", 
            roasting: "medium", 
            isPopular: false
        },
        {
            icon_url: "https://caravan.by/image/cache/catalog/barista/mio_strong_225grsm-1200x800.png", 
            count: 6,  
            description: "Coffee dark (Italian) roasting, with an expressive rich flavor. Characteristic nutty aroma.", 
            id: '15', 
            title: "Barista MIO Strong", 
            price: 2.70, 
            arabica: '100%', 
            brand:"Barista", 
            roasting: "dark", 
            isPopular: false
        },
        {
            icon_url: "https://caravan.by/image/cache/catalog/products/barista/kofe-barista-art-botticelli-molotij-250-g-zh_b-1200x800.jpg", 
            count: 6,  
            description: "Premium Arabicas from South America and Africa leave a subtle aftertaste of milk chocolate and roasted nuts. A pronounced bitterness and a velvety body.", 
            id: '16', 
            title: "Barista Art Botticelli", 
            price: 6.18, 
            arabica: '100%', 
            brand:"Barista", 
            roasting: "dark", 
            isPopular: false
        },
        {
            icon_url: "https://caravan.by/image/cache/catalog/lavazza/decaffeinato_250g-1200x800.png", 
            count: 11,  
            description: "Decaffeinated in a soft natural way, in accordance with EU standards, the concentration of caffeine in the cup does not exceed 0.1%. The original taste of Lavazza coffee is preserved.", 
            id: '17', 
            title: "Lavazza Decaffeinato", 
            price: 5.80, 
            arabica: '100%', 
            brand:"Lavazza", 
            roasting: "medium", 
            isPopular: false
        },
     
        {
            icon_url: "https://caravan.by/image/cache/catalog/products/boggi/boggiespresso-1200x800.png", 
            count: 11,  
            description: "Strong taste with a bright pleasant bitterness. The taste has notes of cocoa and vanilla. Bright coffee aroma will make every break unforgettable. The standard of morning espresso in Italy. ", 
            id: '18', 
            title: "Boggi Espresso", 
            price: 4.83, 
            arabica: '80%', 
            brand:"Boggi", 
            roasting: "dark", 
            isPopular: false
        },
    
        {
            icon_url: "https://caravan.by/image/cache/catalog/products/boggi/boggidolce-1200x800.png", 
            count: 11,  
            description: "Intense aroma and bright multifaceted taste with notes of chocolate, caramel and spicy aftertaste of ripe grapes. Find yourself in the atmosphere of a sun-drenched coffee house in Pisa! ", 
            id: '19', 
            title: "Boggi Dolce", 
            price: 3.48, 
            arabica: '100%', 
            brand:"Boggi", 
            roasting: "medium", 
            isPopular: false
        },
        {
            icon_url: "https://caravan.by/image/cache/catalog/products/boggi/boggicrema-1200x800.png", 
            count: 7,  
            description: "A balanced coffee with a dense, velvety body of the drink and a noticeable pleasant bitterness. The taste has notes of dark chocolate, spices and hazelnuts.", 
            id: '20', 
            title: "Boggi Crema", 
            price: 4.71, 
            arabica: '70%', 
            brand:"Boggi", 
            roasting: "medium", 
            isPopular: false
        },
        {
            icon_url: "https://caravan.by/image/cache/catalog/barista/mio_balance_225grsm-1200x800.png", 
            count: 17,  
            description: "Perfectly balanced flavor with a chocolate flavor and rich, rich aroma.", 
            id: '21', 
            title: "Barista MIO Balance", 
            price: 2.89, 
            arabica: '70%', 
            brand:"Barista", 
            roasting: "medium", 
            isPopular: false
        },
    ],
    filteredProducts:[],
    basket: [],
    filters: {
        count: [],
        price: [],
        arabica: [],
        brand: [],
        roasting: [],
        onlyPopular: false,
        searchValue: '',
    },
    sort: {
        sortByNameA: true,
        sortByNameZ: false,
        sortByPriceLowest: false,
        sortByPriceHighest: false
    },
    isReset: false,
    isLoading: false,
    error: ''
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        productsFetching(state) {
            state.isLoading = true;
        },
        productsFetchingSuccess(state, action: PayloadAction<Array<IProduct>>) {
            state.isLoading = false;
            state.error = '';
            state.products = action.payload
            state.filteredProducts = action.payload
        },
        productsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        },
        addProductToBasket(state, action: PayloadAction<IProduct>) {
            state.basket.push(action.payload)
        },
        removeProductFromBasket(state, action: PayloadAction<IProduct>) {
            const index = state.basket.findIndex(el => el.id === action.payload.id);
            if (index > -1){
                state.basket.splice(index, 1);
            }
        },
        setBasket(state, action: PayloadAction<IProduct[]>) {
            state.basket = action.payload
        },
        addArabicaFilter (state, action: PayloadAction<string>) {
            state.filters.arabica.push(action.payload)
            state.isReset = false
        },
        removeArabicaFilter (state, action: PayloadAction<string>) {
            const index = state.filters.arabica.findIndex(el => el === action.payload);
            if (index > -1){
                state.filters.arabica.splice(index, 1);
            }
        },
        addBrandFilter (state, action: PayloadAction<string>) {
            state.filters.brand.push(action.payload)
            state.isReset = false
        },
        removeBrandFilter (state, action: PayloadAction<string>) {
            const index = state.filters.brand.findIndex(el => el === action.payload);
            if (index > -1){
                state.filters.brand.splice(index, 1);
            }
        },
        addRoastingFilter (state, action: PayloadAction<string>) {
            state.filters.roasting.push(action.payload)
            state.isReset = false
        },
        removeRoastingFilter (state, action: PayloadAction<string>) {
            const index = state.filters.roasting.findIndex(el => el === action.payload);
            if (index > -1){
                state.filters.roasting.splice(index, 1);
            }
        },
        setPriceFilter (state, action: PayloadAction<number[]>){
            state.filters.price = action.payload
            state.isReset = false
        },
        setCountFilter (state, action: PayloadAction<number[]>){
            state.filters.count = action.payload
            state.isReset = false
        },
        setOnlyPopularFilter (state) {
            state.filters.onlyPopular = true
            state.isReset = false
        },
        removeOnlyPopularFilter (state) {
            state.filters.onlyPopular = false
        },
        setFilters (state, action: PayloadAction<FiltersType>){
            state.filters = action.payload
        },
        removeAllFilters(state){
            state.filters =  {
                count: [],
                price: [],
                arabica: [],
                brand: [],
                roasting: [],
                onlyPopular: false,
                searchValue: '',
            }
            state.isReset = true
        },
        setSort (state, action: PayloadAction<SortType>){
            state.sort = action.payload
        },
        setSortByNameA (state) {
            state.sort.sortByNameA = true
            state.sort.sortByNameZ = false    
            state.sort.sortByPriceHighest = false
            state.sort.sortByPriceLowest = false
           
        },
        setSortByNameZ (state) {
            state.sort.sortByNameA = false
            state.sort.sortByNameZ = true    
            state.sort.sortByPriceHighest = false
            state.sort.sortByPriceLowest = false     
            },

         setSortByPriceLowest(state) {
            state.sort.sortByNameA = false
            state.sort.sortByNameZ = false    
            state.sort.sortByPriceHighest = false
            state.sort.sortByPriceLowest = true   
            }, 
         setSortByPriceHighest(state) {
            state.sort.sortByNameA = false
            state.sort.sortByNameZ = false    
            state.sort.sortByPriceHighest = true
            state.sort.sortByPriceLowest = false 
            },
        setSearchValue (state, action: PayloadAction<string>) {
           state.filters.searchValue = action.payload
           state.isReset = false
        },
        removeSearchValue (state) {
            state.filters.searchValue = ''
        },
        removeAllSettings (state) {
            state.filters =  {
                count: [],
                price: [],
                arabica: [],
                brand: [],
                roasting: [],
                onlyPopular: false,
                searchValue: '',
            }
            state.isReset = true,
            state.sort = {
                sortByNameA: true,
                sortByNameZ: false,
                sortByPriceLowest: false,
                sortByPriceHighest: false
            }
            state.basket = []
        },

        getFilteredProducts (state) { 
            return {
                ...state,
                filteredProducts: [...state.products]
                .filter(product => state.filters.arabica.length > 0 
                    ? state.filters.arabica.includes(product.arabica) 
                    : true)
                .filter(product => state.filters.brand.length > 0 
                    ? state.filters.brand.includes(product.brand)
                    : true)
                .filter(product => state.filters.roasting.length > 0 
                    ? state.filters.roasting.includes(product.roasting)
                    : true)
                .filter(product => state.filters.count.length > 0 
                    ? product.count >= state.filters.count[0] && product.count <= state.filters.count[1]
                    : true)
                .filter(product => state.filters.price.length > 0 
                    ? product.price >= state.filters.price[0] && product.price <= state.filters.price[1]
                    : true)
                .filter(product => state.filters.onlyPopular 
                    ? product.isPopular
                    : true)
                .filter(product => state.filters.searchValue !== ''
                    ? new RegExp(state.filters.searchValue, 'i').test(product.title)
                    : true
                )
             }
        },
        getSortedProducts (state) {
           if (state.sort.sortByNameA){
            state.filteredProducts.sort((a,b)=>{
                const titleA = a.title.toLowerCase()
                const titleB = b.title.toLowerCase()
                if (titleA < titleB) {
                    return -1
                }
                if (titleA< titleB) {
                    return 1
                }
                return 0
            })
           }
           if (state.sort.sortByNameZ){
            state.filteredProducts.sort((a,b)=>{
                const titleA = a.title.toLowerCase()
                const titleB = b.title.toLowerCase()
                if (titleB < titleA) {
                    return -1
                }
                if (titleB< titleA) {
                    return 1
                }
                return 0
            })
        }
           if (state.sort.sortByPriceHighest) {
            state.filteredProducts.sort((a,b) => b.price - a.price)
           }

           if (state.sort.sortByPriceLowest) {
            state.filteredProducts.sort((a,b) => a.price - b.price)
           }
           
        }
    }
})

export default appSlice.reducer;
export const {addProductToBasket, 
    removeProductFromBasket, 
    setBasket, 
    addArabicaFilter, 
    removeArabicaFilter, 
    addBrandFilter,
    removeBrandFilter,
    getFilteredProducts,
    addRoastingFilter,
    removeRoastingFilter,
    setPriceFilter,
    setCountFilter,
    setOnlyPopularFilter,
    setSortByNameA,
    getSortedProducts,
    setSortByPriceLowest,
    setSearchValue

} = appSlice.actions