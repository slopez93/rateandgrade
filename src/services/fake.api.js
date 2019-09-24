export const fakeLogin = (username, password) => {
    return {
          "user": {
            "username": "mariaredivo@rateandgrade.com",
            "email": "mariaredivo@rateandgrade.com",
            "first_name": "XXXX",
            "last_name": "XXXXX",
            "birth_date": null,
            "photo":null,
            "gender": 0,
            "telephone": "",
            "pin_code": "0000",
            "is_superuser": false,
            "provider": "rateandgrade",
            "password_set": true
          },
          "expires": 1568983641938,
          "token": "kBzgGKZAAyShOKcpnNFSJY0OVxGL7P"
    }
}

export const fakePolls = () => {
    return [
        {
            id: 1,
            title: 'Poll 1'
        },
        {
            id: 2,
            title: 'Poll 2'
        }
    ]
}