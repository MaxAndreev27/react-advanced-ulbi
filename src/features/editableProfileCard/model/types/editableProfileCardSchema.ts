import { Profile } from '@/entities/Profile';

import { ValidateProfileError } from '@/features/editableProfileCard/model/consts/consts';

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileError[];
}
