class sinhVien {
    constructor(
      id,
      first_name,
      middle_name,
      last_name,
      email,
      phone_number,
      dob
    ) {
      this.id = id;
      this.first_name = first_name;
      this.middle_name = middle_name;
      this.last_name = last_name;
      this.email = email;
      this.phone_number = phone_number;
      this.dob = new Date(dob);
    }
  
    getFullname() {
      return this.first_name + " " + this.middle_name + " " + this.last_name;
    }
    gettheoNam() {
      const today = new Date();
      let tuoi = today.getFullYear() - this.dob.getFullYear();
      return tuoi;
    }
    getTheongay() {
      const today = new Date();
      let tuoi = today.getFullYear() - this.dob.getFullYear();
      return tuoi * 12 * 30 + 82;
    }
  }
  
  const listSinvien = [
    new sinhVien(
      1,
      "NGuyễn",
      "Hữu",
      "Duy",
      "Duy@gmail.com",
      "121412589",
      "10-03=2004"
    ),
    new sinhVien(
      2,
      "Phan",
      "Thanh",
      "Trung",
      "Trung@gmail.com",
      "982112441",
      "04-3-2004"
    ),
    new sinhVien(
      3,
      "Nguyễn ",
      "HUU",
      "Tùng",
      "Tùng@gmail.com",
      "4152141115",
      "2004-05-05"
    ),
    new sinhVien(
      4,
      "Ngô ",
      "Thùy",
      "Linh",
      "Linh@gmail.com",
      "11666211111",
      "05-09-2003"
    ),
    new sinhVien(
      5,
      "Cao",
      "Minh",
      "Toàn",
      "Toan@gmail.com",
      "22242123572",
      "11-11-2003"
    ),
  ];
  
  listSinvien.sort((a, b) => a.getTheongay() - b.getTheongay());
  
  listSinvien.forEach((sinhVien) => {
    console.log(
      sinhVien.getFullname() +
        " " +
        sinhVien.gettheoNam() +
        " " +
        "Tuổi " +
        " " +
        sinhVien.getTheongay() +
        " " +
        "ngày tuổi"
    );
  });
  
  console.log(
    `Thông tin màn hình: ${window.screen.width} x ${window.screen.height}`
  );