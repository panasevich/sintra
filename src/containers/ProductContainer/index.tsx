import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import {fetchRates} from "./actions";
import SimpleSelect from "../../components/Select";
import {options} from "./helpers";
import {State} from "../../store/types";

const CurrencySelect = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state: State) => state.rates.isLoading)
    const [currency, setCurrency] = useState(options[0].value);
    useEffect(() => {
        dispatch(fetchRates(currency));
    }, [currency]);

    const handleChangeCurrency = (value: string) => setCurrency(value);

    return <>
        <SimpleSelect onChange={handleChangeCurrency} options={options} labelText="Current currency" value={currency} />
        {isLoading && <CircularProgress />}
        </>

}

export default CurrencySelect;