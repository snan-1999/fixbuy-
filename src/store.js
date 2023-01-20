import create from "zustand";
export const ProfileStore = create((set) => ({
    StoreData: {
        name: "",
        phone: "",
        profileImg: "",
        email: "",
        status: "",
        logged: false,
    },
    updateUser: (data) => {
        // console.log('update user function started....');
        set((state) => ({ StoreData: { ...state.StoreData, ...data } }))
    },
    StoreSearch: null,
    SearchData : [],
    MainCategoryName : '',
    MainCategoryParam : '',
    SubCategoryName : '',
    SubCategoryParam : '',
    SearchShow : false,
}))