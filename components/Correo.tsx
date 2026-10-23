/**
 * Muestra una dirección de correo permitiendo que, si no cabe en el
 * ancho disponible, se parta antes de la arroba en vez de hacerlo a
 * media palabra (por ejemplo "...@gmail." / "com").
 */
export default function Correo({ valor }: { valor: string }) {
    const arroba = valor.indexOf("@");
    if (arroba < 0) return <>{valor}</>;
    return (
        <>
            {valor.slice(0, arroba)}
            <wbr />
            {valor.slice(arroba)}
        </>
    );
}
