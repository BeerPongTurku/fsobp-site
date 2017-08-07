import bcrypt from 'bcrypt-nodejs';

const records = [
  { id: 1111, rfid: '12345667', password: 'salasana', fname: 'Sami', lname: 'Nieminen', balance: 10, email: "sami@sami.fi" },
  { id: 2222, rfid: '9876543221', password: 'passu', fname: 'Piita', lname: 'Koivisto', balance: -5, email: "piita@piita.fi" }
];

export const findById = (id, cb) => {
  process.nextTick(() => {
    const idx = id - 1;
    if (records[idx]) {
      cb(null, records[idx]);
    } else {
      cb(new Error('User ' + id + ' does not exist'));
    }
  });
}

export const findByRfid = (rfid, cb) => {
  process.nextTick(() => {
    for (let i = 0, len = records.length; i < len; i++) {
      const record = records[i];
      if (record.rfid === rfid) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
}

/** Combine  */
export const findByEmail = (email, cb) => {
  process.nextTick(() => {
    for (let i = 0, len = records.length; i < len; i++) {
      const record = records[i];
      if (email === record.email) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
}


/** TODO: Compare hashed password with bcrypt
 * https://vladimirponomarev.com/blog/authentication-in-react-apps-jwt
*/
export const comparePassword = (email, password, cb) => {
  // bcrypt.compare(password, this.password, cb);
  process.nextTick(() => {
    findByEmail(email, (err, user) => {
      if (err) {
        return cb(err)
      } else if (!user) {
        return cb(null, false)
      } else if (user.password !== password) {
        return cb(null, false)
      }
      return cb(null, false);
    })
  });
}
