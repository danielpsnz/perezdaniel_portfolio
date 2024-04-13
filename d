.project-card {
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 25px;
  padding-right: 25px;
}

.project-card-view {
  box-shadow: 0 4px 5px 3px var(--gray-6) !important;
  color: white !important;
  background-color: transparent !important;
  opacity: 0.9 !important;
  transition: all 0.5s ease 0s !important;
  height: 100% !important;
  border-radius: 20px;
}

.project-card-view .card-title {
  font-size: 1.5rem;
  margin: 10px;
  color: var(--rainbow-4);
  font-family: var(--font-family-base);
  font-weight: 700;
}

.card-text {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--font-color-muted);
  font-family: var(--font-family-base);
}

.card-button {
  color: var(--gray-6) !important;
  font-size: 2.5rem;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid var(---gray-6);
  border-radius: 10px;
}

.card-button:hover {
  color: var(---gray-6);
  border: 3px solid var(---gray-6) !important;
  box-shadow: 0 4px 5px 3px var(--gray-6) !important;
  transform: scale(105%);
}

@media screen and (min-width: 700px) {
  .project-card-view {
    padding: 1.5rem;
  }
}