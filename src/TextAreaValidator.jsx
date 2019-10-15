/* eslint-disable */
import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
/* eslint-enable */
import { ValidatorComponent } from 'react-form-validator-core';

export default class TextAreaValidator extends ValidatorComponent {

    render() {
        /* eslint-disable no-unused-vars */
        const {
            error,
            errorMessages,
            validators,
            requiredError,
            helperText,
            validatorListener,
            withRequiredValidator,
            ...rest
        } = this.props;
        const { isValid } = this.state;
        return (
            <TextareaAutosize
                {...rest}
                error={!isValid || error}
                helperText={(!isValid && this.getErrorMessage()) || helperText}
            />
        );
    }
}
