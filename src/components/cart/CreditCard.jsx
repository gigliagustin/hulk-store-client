import React, { useState, Fragment } from "react";
import Cards from "react-credit-cards";
import { Row, Button, Container } from "react-bootstrap";
import "react-credit-cards/es/styles-compiled.css";
import axios from "axios";

export default function CreditCard({setSale}) {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

   // const cart = localStorage.getItem("cart")
   // ? JSON.parse(localStorage.getItem("cart"))
   // : [];

  const user = JSON.parse(localStorage.getItem("currentUser"));
  const token = user?.token;

  const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post( process.env.REACT_APP_API_URL + "/sale", {
        paymentMethod: "CREDIT_CARD",
        address: "Libertad 654, Geneal guemes, salta, cp: 4430",
        observation: "tocar la puerta"
      }, {
        headers: {
          "x-access-token": token
        }
      });
      setSale(res);
    }
    catch (error) {
      console.log(error);
    }


    setNumber("");
    setName("");
    setExpiry("");
    setCvc("");
    setFocus("");
  };

  return (
    <Fragment>
      <Container className="border rounded mb-3 py-2">
        <Row>
          <Cards
            className="col-12 col-md-6 mt-5 mb-5"
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
          />
        </Row>
        <Row className="mt-4">
          <form className="col-12 col-md-6 m-auto" onSubmit={HandleSubmit}>
            <input
              className="form-control mb-2 "
              type="tel"
              name="number"
              maxlength="16"
              pattern="[\d| ]{16,22}"
              placeholder="Numero de la tarjeta"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              required
            />
            <input
              className="form-control  mb-2 "
              type="text"
              name="name"
              placeholder="Titular de la tarjeta"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              required
            />
            <input
              className="form-control  mb-2 "
              type="text"
              name="expiry"
              maxlength="4"
              placeholder="Fecha Vencimiento"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              required
            />

            <input
              className="form-control  mb-2 "
              type="tel"
              name="cvc"
              maxlength="3"
              placeholder="Codigo de Seguridad"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              required
            />

            <Button className="float-right mb-5" type="submit">
              Confirmar pago
            </Button>
          </form>
        </Row>
      </Container>
    </Fragment>
  );
}
