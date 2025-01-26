import axios from "axios";

// Define your API URLs
const API_URL_MODAL = "http://localhost:3000/api/modal";
const API_URL_PEMASUKAN = "http://localhost:3000/api/pemasukan";
const API_URL_PENGELUARAN = "http://localhost:3000/api/pengeluaran";
const API_URL_DTRANSAKSI = "http://localhost:3000/api/dtransaksi";
const API_URL_PRODUK = "http://localhost:3000/api/produk";  // API URL for produk
const API_URL_TRANSAKSI = "http://localhost:3000/api/transaksi";  // API URL for transaksi
const API_URL_USERS = "http://localhost:3000/api/users";  // API URL for Users
const API_URL_TUTUP_BUKU = "http://localhost:3000/api/tutup_buku";  // Update with your actual backend URL

// Fetch data for Modal
export const fetchModalData = async () => {
  try {
    const response = await axios.get(API_URL_MODAL);
    return response.data;
  } catch (error) {
    console.error("Error fetching modal data:", error);
    throw error;
  }
};

// Fetch data for Pemasukan
export const fetchPemasukanData = async () => {
  try {
    const response = await axios.get(API_URL_PEMASUKAN);
    return response.data;
  } catch (error) {
    console.error("Error fetching pemasukan data:", error);
    throw error;
  }
};

// Fetch data for Pengeluaran
export const fetchPengeluaranData = async () => {
  try {
    const response = await axios.get(API_URL_PENGELUARAN);
    return response.data;
  } catch (error) {
    console.error("Error fetching pengeluaran data:", error);
    throw error;
  }
};

// Fetch data for Dtransaksi
export const fetchDtransaksiData = async () => {
  try {
    const response = await axios.get(API_URL_DTRANSAKSI);
    return response.data;
  } catch (error) {
    console.error("Error fetching dtransaksi data:", error);
    throw error;
  }
};

// Fetch data for Produk
export const fetchProdukData = async () => {
  try {
    const response = await axios.get(API_URL_PRODUK);
    return response.data;
  } catch (error) {
    console.error("Error fetching produk data:", error);
    throw error;
  }
};

// Fetch data for Transaksi
export const fetchTransaksiData = async () => {
  try {
    const response = await axios.get(API_URL_TRANSAKSI);
    return response.data;
  } catch (error) {
    console.error("Error fetching transaksi data:", error);
    throw error;
  }
};

// Fetch data for Users
export const fetchUsersData = async () => {
  try {
    const response = await axios.get(API_URL_USERS);
    return response.data;
  } catch (error) {
    console.error("Error fetching users data:", error);
    throw error;
  }
};

// Fetch data for Tutup Buku
export const fetchTutupBukuData = async () => {
  try {
    const response = await axios.get(API_URL_TUTUP_BUKU);
    return response.data;
  } catch (error) {
    console.error("Error fetching tutup buku data:", error);
    throw error;
  }
};
