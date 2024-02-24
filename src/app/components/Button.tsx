import classnames from "@/shared/classnames";

export const Button = ({ link, cta, loading = false, children, classname, validation }: any) => {
    return (
        <button
            onClick={link}
            type="submit"
            className={classnames('p-3 rounded-md disabled:opacity-50 disabled:cursor-not-allowed', classname)}
            disabled={loading || validation}
        >
            {loading ? 'Please wait...' : cta}
            {children}
        </button>
    );
}