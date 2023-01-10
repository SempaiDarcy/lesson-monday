import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField'
type InputPropsType = {
    callBack:(title:string)=>void

}
export const AddItemForm = (props:InputPropsType) => {
    const [title,setTitle]=useState('')
    const [error,setError] = useState<string|null>(null)
    const callBackStarter = () => {
        if (title.trim() !==''){
            props.callBack(title)
            setTitle('')
        }
        else{
            setError('Введите текст')
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setTitle(e.currentTarget.value)
    }

    const onKeyDownHandler = (e:KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            callBackStarter()
        }
    }
    return (
        <div>
            {/*<input value={title}*/}
            {/*       className={error ? 'error' : ''}*/}
            {/*       onChange={onChangeHandler}*/}
            {/*       onKeyDown={onKeyDownHandler}*/}
            {/*/>*/}
            <TextField  size={'small'}
                        value={title}
                        id='outlined-basic'
                        label ={error?'Title is required':'Your text'}
                        variant='outlined'
                        error={!!error}
                        onChange={onChangeHandler}
                        onKeyDown={onKeyDownHandler}
            />

            <Button size='small' variant='contained' onClick={callBackStarter} style={{maxWidth:'40px',minWidth:'40px',minHeight:'40px'}}>+</Button>
        </div>
    );
};
