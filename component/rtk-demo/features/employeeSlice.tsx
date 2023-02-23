import { createSlice } from "@reduxjs/toolkit";

const items: any[] = [];
const modal = [
  {
    show: {
      popup: false,
      id: null,
    },
    add:  false,
  },
];
const initialState = {
  items,
  modal,
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      console.log(action.payload , 'action payload')
      state.items.push(action.payload);
      state.modal.map((item) => {
        item.add = false
     })
    },
    deleteEmployee: (state, action) => {
      state.items = state.items.filter((item) => item.id != action.payload.id);
    },
    addemployeePopup: (state , action )=> {
      console.log('ehhehehe comming' ,state)
      state.modal.map((item) => {
         item.add = true
      })
    },

    closeAddEmployeePopup: (state) => {
      // console.log('ehhehehe comming' ,state)
      state.modal.map((item) => {
         item.add = false
      })
    },
    updateEmployee: (state, action) => {
      console.log("Testing updateemployee", action, state);
      state.items.map((item) => {
        if (item.id == action.payload.id) {
          item.firstName = action.payload.firstName;
          item.lastName = action.payload.lastName;
          item.date = action.payload.date;
          item.email = action.payload.email;
          item.salary = action.payload.salary;
          item.status = action.payload.status;
        }
      });
      state.modal.map((item) => {
        if (item.show.id && action.payload.id) {
          item.show.popup = false;
          
        }
      });
    },

    updateShowModal: (state, action) => {
      // console.log(action.payload.show.popup , "update modalal")
      const filteredItems = state.modal.find(
        (item) => item.show.id === action.payload.show.id
      );
      if (filteredItems) {
        filteredItems.show.popup = action.payload.show.popup;
      } else {
        state.modal.push(action.payload);
      }
    },
  
  },
});

export const {
  addEmployee,
  deleteEmployee,
  updateEmployee,
  updateShowModal,
  addemployeePopup,
  closeAddEmployeePopup
} = employeeSlice.actions;

export default employeeSlice.reducer;
