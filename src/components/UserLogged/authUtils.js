import supabase from '../config/supabaseClient';

// Sign-up function kochaw 
export const signUp = async (username, email, password) => {
    if (!username || !email || !password) {
        return { error: 'Please fill in all the fields' };
    }

    const { data, error } = await supabase
        .from('users')
        .insert([{ username, email, password }])
        .select();

    if (error) {
        console.error(error);
        return { error: 'An error occurred during sign up' };
    }

    return { data };
};

// Login function kochaw 
export const login = async (username, password) => {
    if (!username || !password) {
        return { error: 'Please fill in all the fields' };
    }

    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('username', username)
        .eq('password', password)
        .single();

    if (error) {
        console.error(error);
        return { error: 'Invalid username or password' };
    }

    return { data };
};

export const signOut = async () => {
    try {
        const { error } = await supabase.auth.signOut();
        if (error) {
            throw error;
        }
    } catch (error) {
        console.error('Sign-out error:', error.message);
        return { error: 'An error occurred during sign-out' };
    }
};

