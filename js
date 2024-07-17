import java.util.Scanner;

public class Calculadora {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Solicitar al usuario que ingrese dos números
        System.out.print("Ingrese el primer número: ");
        double num1 = scanner.nextDouble();

        System.out.print("Ingrese el segundo número: ");
        double num2 = scanner.nextDouble();

        // Mostrar opciones de operaciones disponibles
        System.out.println("Seleccione una operación:");
        System.out.println("1. Suma");
        System.out.println("2. Resta");
        System.out.println("3. Multiplicación");
        System.out.println("4. División");

        // Leer la opción del usuario
        System.out.print("Ingrese el número de la operación deseada: ");
        int opcion = scanner.nextInt();

        // Realizar la operación seleccionada
        double resultado = 0;
        switch (opcion) {
            case 1:
                resultado = num1 + num2;
                break;
            case 2:
                resultado = num1 - num2;
                break;
            case 3:
                resultado = num1 * num2;
                break;
            case 4:
                if (num2 != 0) {
                    resultado = num1 / num2;
                } else {
                    System.out.println("Error: No se puede dividir por cero.");
                    return; // Salir del programa si hay una división por cero
                }
                break;
            default:
                System.out.println("Opción no válida.");
                return; // Salir del programa si la opción no es válida
        }

        // Mostrar el resultado
        System.out.println("El resultado es: " + resultado);

        scanner.close();
    }
}