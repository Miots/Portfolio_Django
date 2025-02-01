from django.shortcuts import render

def home(request):
    
    return render(request, 'portfolio/main.html')

from django.shortcuts import render
from datetime import datetime

def your_view(request):
    current_year = datetime.now().year
    context = {
        'current_year': current_year,
        # Ajoutez d'autres variables de contexte ici
    }
    return render(request, 'portfolio/footer.html', context)

from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def send_email(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        subject = request.POST.get("subject")
        message = request.POST.get("message")

        full_message = f"Nom: {name}\nEmail: {email}\nObjet: {subject}\n\nMessage:\n{message}"

        try:
            send_mail(
                subject,
                full_message,
                email,  # L'email de l'expéditeur
                ["ton-email@example.com"],  # Remplace par ton adresse e-mail
                fail_silently=False,
            )
            return JsonResponse({"success": "Message envoyé avec succès !"})

        except Exception as e:
            return JsonResponse({"error": f"Erreur lors de l'envoi: {str(e)}"})

    return JsonResponse({"error": "Méthode non autorisée"})
