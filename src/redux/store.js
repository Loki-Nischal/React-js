
import { combineReducers } from 'redux'
import AuthReducer from './authSlice'
import { persistStore, persistReducer } from 'redux-persist'
import  storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { configureStore } from '@reduxjs/toolkit'




const persistConfig = {
    key: 'root', //key in localstorage
    storage,  //storage type (local storage)
} 

// combine reducer
const rootReducer = combineReducers({
    auth: AuthReducer, 
})

//wrap rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer: persistedReducer, 
})

export const persistor = persistStore(store)