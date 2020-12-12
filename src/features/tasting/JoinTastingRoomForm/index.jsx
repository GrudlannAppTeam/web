import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { joinToTastingRoom as join } from '../../../redux/methods/tasting';

import TastingRoomForm from '../../../components/TastingRoomForm';

const JoinTastingRoomForm = ({ isLoading, setIsLoading, join }) => {
    const { register, handleSubmit, errors, setError, clearErrors } = useForm();

    const joinToTastingRoom = async data => {
        clearErrors();
        setIsLoading(true);

        const error = await join(data);
        setIsLoading(false);
        if(error) {
            setError('form', { message: error });
        }
    };

    return (
        <TastingRoomForm
            button='Dołącz'
            clearErrors={clearErrors}
            errors={errors}
            handleSubmit={handleSubmit}
            onSubmit={joinToTastingRoom}
            isLoading={isLoading}
            label='Kod'
            name='code'
            register={register}
            title='Dołącz za pomocą kodu'
            maxLength={6}
        />
    );
};

JoinTastingRoomForm.propTypes = {
    isLoading: PropTypes.bool,
    setIsLoading: PropTypes.func,
    join: PropTypes.func,
};

const mapDispatch = {
    join,
};

export default connect(null, mapDispatch)(JoinTastingRoomForm);