import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { createTastingRoom as create } from '../../../redux/methods/tasting';

import TastingRoomForm from '../../../components/TastingRoomForm';

const CreateTastingRoomForm = ({ isLoading, setIsLoading, create }) => {
    const { register, handleSubmit, errors, setError, clearErrors } = useForm();

    const createTastingRoom = async data => {
        clearErrors();
        setIsLoading(true);

        const error = await create(data);
        setIsLoading(false);
        if(error) {
            setError('form', { message: error });
        }
    };

    return (
        <TastingRoomForm
            button='Utwórz'
            clearErrors={clearErrors}
            errors={errors}
            handleSubmit={handleSubmit}
            onSubmit={createTastingRoom}
            isLoading={isLoading}
            label='Nazwa'
            name='name'
            register={register}
            title='Utwórz nową degustację'
        />
    );
};

CreateTastingRoomForm.propTypes = {
    isLoading: PropTypes.bool,
    setIsLoading: PropTypes.func,
    create: PropTypes.func,
};

const mapDispatch = {
    create,
};

export default connect(null, mapDispatch)(CreateTastingRoomForm);