import React, { useState, useEffect } from "react";
import {
    formatNumber,
    convertTimeMsToTimeElapsedString,
} from "../../../utils/StringHelperFunctions";
import { OperationElem } from "./OperationElem";
import { Operation } from "../Operation";

interface IProps {
    bladeburner: any;
}

export function OperationList(props: IProps): React.ReactElement {
    const setRerender = useState(false)[1];

    useEffect(() => {
        const id = setInterval(() => setRerender(old => !old), 1000);
        return () => clearInterval(id);
    }, []);

    const names = Object.keys(props.bladeburner.operations);
    const operations = props.bladeburner.operations;
    return (<>
        {names.map((name: string) => 
            <li key={name} className="bladeburner-action">
                <OperationElem bladeburner={props.bladeburner} action={operations[name]} />
            </li>
        )}
    </>);
}