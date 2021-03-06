import React from 'react';
import { Input } from './styles';

export interface EventHandlerProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    onKeyDown: (e: React.KeyboardEvent) => void;
}

export const SearchBar = ({ onChange, value, onKeyDown }: EventHandlerProps) => {
    return (
        <Input 
            onChange={onChange}
            value={value}
            onKeyDown={onKeyDown}
            placeholder='Busque um filme por nome, ano ou gênero...'
            type='text' 
        />
    )
}
