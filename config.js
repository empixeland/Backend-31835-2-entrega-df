const config = {
    mongodb: {
      cnxStr: "mongodb://localhost/coderfinal",
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        serverSelectionTimeoutMS: 5000,
      },
    },
    firebase: {
      "type": "service_account",
    "project_id": "coder-segunda-eb143",
    "private_key_id": "b48a0dec6bb4522e22b7b9638d79f451e9f4feb6",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDwu2YHfoOPWOkk\nXmmdIaNY9d6Yrm545DzI198Lc7TuoBZ4uoZ0IcQjvg6FUmJIqmhAcrFR3Q3fPuvw\nruK0yY5pVUxq3rvwW/LOirHIS80vb0n2Y/VlCte1mCmJEAqLW/9rgtrW+uqfzjJE\nknv7dTG7zn6COSy2f8bsxKiivpzbcom3ZESc6gxDpNIEMsTaWrTYS6M4598EqKSc\nnEgV38Dn5N1TjoFIniW2A2rAi/4+DSGZNm/cr+FbfJJwMseaBEUV8L4bZunt4R0T\nEeO1Z9fFm5anLv3T6bb6J3X9PnGcCIme//VCh0tleFfqCosuh5WcjqHSWApbDEa5\nBS/YWN87AgMBAAECggEAYD5z7LQacgGYeGdcrysnLOZjv8QhO6j4Wk3gCSqR4ENV\nqJ/eKGjli2qtUIUe8TFb68RO+003AhWca8XnsmLQ0nD9U87H8bE5MnVF3a/ckUXb\nmqvdDLAYjKwQkxE8PfoidH/E8WUwz4I3G6467k4s+4pzjqnAJBiS1c9MIoC1oo/y\nRyNj0G303SZ+Ro+ksjrnPXdL0uhGarexgytdD0a6gWkTdO9EXF8oA7N5mWglfTyl\ncrGu74k1Nfl13R/GmRESLYl9p9piJaU/EpNlgw1S56G3I5DO8vTkKZUnI2kEKlBU\nuX5lJk8FUtsPEHu13B+JaPCUR5dUlClrpsAzWMrcZQKBgQD/GTZ3d5b05TCczqUb\nBWASDCxElGsMlkSk4/RI4+h4UXd93xQ+m8ItAI0FWZ6laNxsKgYyzPHyPL142Aiv\nTb4PZlzDQjE5bSr8HvtCW4B3KnDuWPOgUSeMy1JCqf09CeQMoc15kGZJzhN5S1qj\n3cy7STUtSqGEaDVNRgS2qJ+TlQKBgQDxlTA/0rkCOYXpn+VDOV6ItOma5RG14I/b\nK+UTER6s2HW81zcjux05droE65FxQ89OM5UmsyBoaJH40FLSH5PoHMkQzd2pqccR\nitdy7C73O4DOO06c5hTTjHv1x9gBoSZjYejfEGM0WZjg3x2VRk+MeZnNFnF6k200\n145CzePzjwKBgQDNJpif8SQMpLi4kpNDLMp7GSEMshN5Fuvzc4OEjwzonhOrvZiJ\nVTgOeu/uSomEWtVRg2ZiumElP2Xc5lftq2ba+aZGPVha54l3Iu9MCUxCCXayqASd\nfEaDOwxXol+PFAI7inA1gERSvJD6rfgh6oD4aUKDvw4v7qJXF6U4xFk5FQKBgQCm\naAR3QhiMTsFOXwSWHLNgaXWsa3Oam5eb+g1t59IAb44SSRDDPQVxarXR484offQT\nQvbPVH3TTYyXHjCeaoAAV6usNpIkZz0neULU95mWVVdxN2r8KoRYACH29/RzkuSV\neoDk/i3HhpwG8ck35NmwwqZNndMHAvwrdPuaSqZlQwKBgGotjAirm1Jo5945mBAL\nA1MtBcyBfJEvgIR2CixLRcsWaSLzML89rtP0NG8G80oa1/1f16Z2IlibW37kfWnm\nrZeT5EelUiX43BYx/yTLaVuc1YQqS3XtYaPszzjuiFbdJTGSgYMkakhaq5OwDAhV\n8BDGR4GVgDeQ1RNkbX9xGH+v\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-1sbrm@coder-segunda-eb143.iam.gserviceaccount.com",
    "client_id": "115421407638611093789",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-1sbrm%40coder-segunda-eb143.iam.gserviceaccount.com"
    },
  };
  
  module.exports = config;