//Reducer
//1 Function
// Cập nhật state ở kho chung
const initValue = { value: 0 };
const rootReducer = (state = initValue, action) => {
  //Nhan gia tri khoi toa la Obj vs value =0
  // Kiem tra Action-> thuwc hien cap nhat state
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        value: state.value + 1,
        // su dung dong lenh bat bien chu ko thay doi truc tiep (tao copy, cap nhat lai gia tri mong muon)
      };
    default:
      return state;
    //Vs reducer thi` state moi luon duoc tinh toan dua tren state trc do
    //ko duoc su dung cac doan code Bat dong bo
  }
};
